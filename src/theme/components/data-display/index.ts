import type { Components, Theme } from '@mui/material/styles';
import { chip } from './chip';
import { table } from './table';

export const dataDisplay: Components<Theme> = {
  ...chip,
  ...table,
};

export { chip, table };

export default dataDisplay;
