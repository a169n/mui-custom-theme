import {
  Box,
  Container,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from '@mui/material';
import { Outlet, NavLink } from 'react-router-dom';
import { routeGroups } from '../../routes/componentRoutes';
import ModeToggle from '../ModeToggle';

const AppLayout = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={6}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={2}
        >
          <Box>
            <Typography variant="h3" component="h1" gutterBottom>
              MUI Custom Theme
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Browse foundational tokens and individual components by category.
            </Typography>
          </Box>
          <ModeToggle />
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="flex-start">
          <Box sx={{ width: { xs: '100%', md: 280 } }}>
            <Box
              component="nav"
              sx={{
                position: { md: 'sticky' },
                top: { md: 48 },
                maxHeight: { md: 'calc(100vh - 96px)' },
                overflowY: { md: 'auto' },
                pr: { md: 1.5 },
              }}
            >
              {routeGroups.map((group) => (
                <List
                  key={group.title}
                  dense
                  disablePadding
                  subheader={
                    <ListSubheader component="div" disableSticky sx={{ px: 0, py: 1.5 }}>
                      <Typography variant="overline" color="text.secondary">
                        {group.title}
                      </Typography>
                    </ListSubheader>
                  }
                >
                  {group.routes.map((route) => (
                    <ListItemButton
                      key={route.path}
                      component={NavLink}
                      to={`/${route.path}`}
                      sx={{
                        borderRadius: 2,
                        mb: 0.5,
                        px: 2,
                        py: 1,
                        color: 'text.secondary',
                        '&.active': {
                          bgcolor: 'action.selected',
                          color: 'text.primary',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          bgcolor: 'error.main',
                          mr: 2,
                        }}
                      />
                      <ListItemText
                        primary={route.label}
                        primaryTypographyProps={{ fontWeight: 500 }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              ))}
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, width: '100%' }}>
            <Outlet />
          </Box>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default AppLayout;
