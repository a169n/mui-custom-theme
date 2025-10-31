import type { Components, Theme } from '@mui/material/styles';
import { navigationMenus } from './menu';

export const navigation: Components<Theme> = {
  ...navigationMenus,
};

export { navigationMenus };

export default navigation;
