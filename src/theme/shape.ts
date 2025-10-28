import type { ShapeOptions } from '@mui/material/styles';
import type { DesignTokens } from './tokens';

export const createShape = (tokens: DesignTokens): ShapeOptions => {
  const radius = tokens.theme.base.radius as Record<string, number> | undefined;
  const defaultRadius = radius?.md ?? 8;

  return {
    borderRadius: defaultRadius,
  } satisfies ShapeOptions;
};
