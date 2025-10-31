import type { Components, Theme } from '@mui/material/styles';
import { buttons } from './buttons';

export const actions: Components<Theme> = {
  ...buttons,
};

export { buttons };

export default actions;
