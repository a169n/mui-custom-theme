/**
 * Component overrides grouped by domain
 */

import type { Components, Theme } from '@mui/material/styles';
import { actions } from './actions';
import { base } from './base';
import { dataDisplay } from './data-display';
import { forms } from './forms';
import { inputs } from './inputs';
import { navigation } from './navigation';
import { surfaces } from './surfaces';

export const components: Components<Theme> = {
  ...actions,
  ...base,
  ...dataDisplay,
  ...forms,
  ...inputs,
  ...navigation,
  ...surfaces,
};

export { actions, base, dataDisplay, forms, inputs, navigation, surfaces };

export default components;
