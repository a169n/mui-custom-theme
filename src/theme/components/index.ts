/**
 * Component overrides grouped by domain
 */

import type { Components, Theme } from '@mui/material/styles';
import { inputs } from './inputs';
import { others } from './others';
import { surfaces } from './surfaces';

export const components: Components<Theme> = {
  ...surfaces,
  ...inputs,
  ...others,
};

export { inputs, surfaces, others };

export default components;
