import { useMemo } from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import PageContainer from '../PageContainer';
import { createUsageSnippet } from '../../utils/createUsageSnippet';

const calendarUsage = createUsageSnippet([
  'const todayStyles = {',
  '  bgcolor: theme.palette.primary.main,',
  '  color: theme.palette.primary.contrastText,',
  '};',
  '',
  'return <TableCell sx={todayStyles}>15</TableCell>;',
]);

const buildCalendar = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const weeks: number[][] = [];
  let currentWeek: number[] = new Array(firstDay.getDay()).fill(0);

  for (let day = 1; day <= lastDay.getDate(); day += 1) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length) {
    weeks.push([...currentWeek, ...new Array(7 - currentWeek.length).fill(0)]);
  }

  return weeks;
};

export const CalendarPage = () => {
  const today = useMemo(() => new Date(), []);
  const weeks = useMemo(() => buildCalendar(today), [today]);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <PageContainer
      title="Calendar"
      description="Calendar views typically rely on MUI X. This mockup approximates the layout."
      usage={calendarUsage}
    >
      <Table size="small" sx={{ maxWidth: 420 }}>
        <TableHead>
          <TableRow>
            {weekDays.map((day) => (
              <TableCell key={day} align="center">
                <Typography variant="subtitle2" color="text.secondary">
                  {day}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {weeks.map((week, index) => (
            <TableRow key={index}>
              {week.map((value, dayIndex) => (
                <TableCell key={`${index}-${dayIndex}`} align="center" sx={{ py: 1.5 }}>
                  {value ? (
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: value === today.getDate() ? 'primary.main' : 'transparent',
                        color: value === today.getDate() ? 'primary.contrastText' : 'inherit',
                      }}
                    >
                      {value}
                    </Box>
                  ) : null}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </PageContainer>
  );
};

export default CalendarPage;
