import { Stack } from '@mui/material';
import BreakpointsSection from './BreakpointsSection';
import ColorsSection from './ColorsSection';
import ComponentsSection from './ComponentsSection';
import ShadowsSection from './ShadowsSection';
import SpacingSection from './SpacingSection';
import TokensSection from './TokensSection';
import TypographySection from './TypographySection';

const ThemeShowcase = () => (
  <Stack spacing={4}>
    <ColorsSection />
    <TypographySection />
    <SpacingSection />
    <ShadowsSection />
    <BreakpointsSection />
    <ComponentsSection />
    <TokensSection />
  </Stack>
);

export default ThemeShowcase;
