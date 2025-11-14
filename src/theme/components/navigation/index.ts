import type { Components, Theme } from '@mui/material/styles';
import { navigationMenus } from './menu';
import { navigationStepper } from './stepper';

export const navigation: Components<Theme> = {
  ...navigationMenus,
  ...navigationStepper,
};

export { navigationMenus, navigationStepper };

export default navigation;
