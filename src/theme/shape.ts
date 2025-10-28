/**
 * Shape configuration
 * Defines border radius and other shape-related properties
 */

import type { ShapeOptions } from '@mui/system';
import { designTokens } from './tokens';

const shape: ShapeOptions = {
  borderRadius: designTokens.theme.radius.md,
};

export default shape;
