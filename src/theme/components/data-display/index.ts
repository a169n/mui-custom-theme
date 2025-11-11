import type { Components, Theme } from '@mui/material/styles';
import { chip } from './chip';
import { skeleton } from './skeleton';
import { table } from './table';

export const dataDisplay: Components<Theme> = {
  ...chip,
  ...skeleton,
  ...table,
};

export { chip, skeleton, table };

export default dataDisplay;
