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
    <Box
      sx={{
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: (theme) => theme.zIndex.modal + 1,
      }}
    >
      <ModeToggle />
    </Box>
    <Container maxWidth="xl" sx={{ py: 6 }}>
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
            <Typography variant="textL" color="text.secondary">
              Browse foundational tokens and individual components by category.
            </Typography>
          </Box>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="flex-start">
          <Box sx={{ width: { xs: '100%', md: 280 } }}>
            <Box
              component="nav"
              sx={{
                position: { md: 'sticky' },
                top: { md: 48 },
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
                          bgcolor:
                            route.status === 'done'
                              ? 'success.main'
                              : route.status === 'in-progress'
                                ? 'warning.main'
                                : 'error.main',
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
