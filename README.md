## Design Token Structure

The BI design tokens are delivered with the same hierarchy that appears in `BI_Design_UI_variables.json`.
Access them through the extended MUI theme via `theme.tokens`.

```
theme.tokens.primitives
theme.tokens.modes.light
theme.tokens.modes.dark
```

### `primitives`

Static values that never change with the color mode.

| Path                                        | Description                                                          |
| ------------------------------------------- | -------------------------------------------------------------------- |
| `theme.tokens.primitives.colors`            | Base color ramps (`base`, `brand`, semantic ramps, etc.)             |
| `theme.tokens.primitives.spacing`           | 4px spacing scale used by `theme.spacing()`                          |
| `theme.tokens.primitives.width` / `.height` | Width/height aliases that mirror the spacing grid (`w-2`, `h-10`, …) |
| `theme.tokens.primitives.borderRadius`      | Rounded aliases (`.lg`, `._2xl`, `.full`; legacy `rounded-*` keys)   |
| `theme.tokens.primitives.borderWidth`       | Stroke widths (`border2`, `border4`; legacy `border-*` keys)         |
| `theme.tokens.primitives.opacity`           | Opacity percentages (0 → 100)                                        |
| `theme.tokens.primitives.lineHeight`        | `leading1`, `leading12`, … helpers for vertical rhythm               |
| `theme.tokens.primitives.default`           | Default text color (neutral 950)                                     |

Available color ramps: `base`, `brand`, `neutral`, `cyan`, `green`, `lime`, `orange`, `pink`, `purple`, `red`, `rose`, `teal`, and `yellow`.

Example:

```ts
const cardPadding = theme.tokens.primitives.spacing[6]; // 24
const chipRadius = theme.tokens.primitives.borderRadius.full; // 9999
```

#### Where primitives show up in code

| Documented path                            | Actual usage in repo                                                                                                                                           | Example value(s)                                                                 |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `theme.tokens.primitives.colors`           | `theme.tokens.primitives.colors.brand[600]` (`src/pages/foundations/TokenUsagePage.tsx`, `src/components/theme-showcase/TokensSection.tsx`)<br />`theme.tokens.primitives.colors.neutral[900]` / `.base.white` (`src/theme/components/data-display/table.ts`) | `brand[600] = #0675ff`<br />`neutral[900] = #171717`, `base.white = #ffffff`      |
| `theme.tokens.primitives.spacing`          | `theme.tokens.primitives.spacing[6]` (`TokenUsagePage.tsx`) <br /> `theme.tokens.primitives.spacing[4]` (`TokensSection.tsx`)                                   | `[6] = 24px`<br />`[4] = 16px`                                                   |
| `theme.tokens.primitives.width` / `.height`| _Not referenced yet_                                                                                                                                           | —                                                                                |
| `theme.tokens.primitives.borderRadius`     | `theme.tokens.primitives.borderRadius.lg` (`TokenUsagePage.tsx`)                                                                                                | `.lg = 10px`                                                                     |
| `theme.tokens.primitives.borderWidth`      | _Not referenced yet_                                                                                                                                           | —                                                                                |
| `theme.tokens.primitives.opacity`          | _Not referenced yet_                                                                                                                                           | —                                                                                |
| `theme.tokens.primitives.lineHeight`       | _Not referenced yet_                                                                                                                                           | —                                                                                |
| `theme.tokens.primitives.default`          | _Not referenced yet_                                                                                                                                           | —                                                                                |

### `modes`

Mode aware tokens that swap when `theme.palette.mode` is `light` or `dark`.
Each mode bundles both the typographic foundations and appearance colors.

| Path                                                          | Description                                                            |
| ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `theme.tokens.modes[mode].font`                               | Font families (`font-sans`, `font-mono`)                               |
| `theme.tokens.modes[mode].typography`                         | Full typography scale (`H1`, `Subtitle`, `textXs`, …)                  |
| `theme.tokens.modes[mode].breakpoint`                         | Tailwind-like breakpoint values (`sm`, `md`, `lg`, `xl`, `2xl`, `3xl`) |
| `theme.tokens.modes[mode].container`                          | Container widths (`3xs` → `8xl`)                                       |
| `theme.tokens.modes[mode].fontWeight`                         | Weight names (`Regular`, `Medium`, `Semibold`, `Bold`)                 |
| `theme.tokens.modes[mode].radius`                             | Corner radii (`xs` → `7xl`)                                            |
| `theme.tokens.modes[mode].shadow`                             | Shadow palettes (`black`, `white`, `brand`, `negative`, `positive`)    |
| `theme.tokens.modes[mode].bg` / `.text` / `.icon` / `.border` | Mode specific semantic colors (e.g., `bg.brand.default`, `bg.brand.muted`) |
| `theme.tokens.modes[mode].colors`                             | Semantic ramps remapped for the active mode                            |
| `theme.tokens.modes[mode].custom`                             | Focus/destructive overlays                                             |
| `theme.tokens.modes[mode].logo`                               | Brand/logo colors (`default`, `stage`, `test`)                         |
| `theme.tokens.modes[mode].alpha.white` / `.alpha.black`       | Alpha ramps for overlays                                               |

Example usage inside a component:

```ts
const modeTokens = theme.tokens.modes[theme.palette.mode];

const styles = {
  borderRadius: `${modeTokens.radius.lg}px`,
  backgroundColor: modeTokens.bg.default,
  fontFamily: modeTokens.font['font-sans'],
  '&:focus-visible': {
    boxShadow: `0 0 0 4px ${modeTokens.custom.focused}`,
  },
};
```

> Tip: because the same structure exists under both `light` and `dark`, the lookup path never changes—only
> the selected `mode` does.

#### Where mode-aware tokens show up in code

| Documented path                                | Actual usage in repo                                                                                                                                                                                                                                                                             | Example value(s)                                                                                         |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `theme.tokens.modes[mode].font`                | `modeTokens.font['font-sans']` (`src/components/CodeBlock.tsx`, `src/pages/foundations/PalettePage.tsx`)                                                                                                                                                                                          | `'Roboto'`                                                                                               |
| `theme.tokens.modes[mode].typography`          | `modeTokens.typography.H3['font-size']` (`TokensSection.tsx`), `modeTokens.typography[variant]` (`TypographyPage.tsx`)                                                                                                                                                                            | `H3 font-size = 36px`, `H3 line-height = 40px`                                                           |
| `theme.tokens.modes[mode].breakpoint`          | _Not referenced yet_                                                                                                                                                                                                                                                                             | —                                                                                                        |
| `theme.tokens.modes[mode].container`           | _Not referenced yet_                                                                                                                                                                                                                                                                             | —                                                                                                        |
| `theme.tokens.modes[mode].fontWeight`          | _Not referenced yet_                                                                                                                                                                                                                                                                             | —                                                                                                        |
| `theme.tokens.modes[mode].radius`              | `modeTokens.radius.lg` / `.md` / `.xl` (`CustomSelect.tsx`, `inputs.tsx`, `IconButton.tsx`, `navigation/menu.ts`, `TokenUsagePage.tsx`, `SpacingSection.tsx`)                                                                                                                                      | `.lg = 10px`, `.md = 8px`, `.xl = 12px`                                                                  |
| `theme.tokens.modes[mode].shadow`              | `modeTokens.shadow.black[2]` (`CustomSelect.tsx`, `navigation/menu.ts`, `TokenUsagePage.tsx`)                                                                                                                                                                                                     | `black[2] = 0px 4px 6px -1px rgba(33, 33, 33, 0.08)`                                                     |
| `theme.tokens.modes[mode].bg` / `.text` / `.icon` / `.border` | Backgrounds: `modeTokens.bg.default`, `.muted`, `.background`, tone buckets (`modeTokens.bg.brand.default`, `.brand.muted`, `.positive.default`, `.positive.muted`, etc.) across `CustomSelect.tsx`, `buttons.ts`, `ModeToggle.tsx`, `TokenUsagePage.tsx`, `chip.ts`, `inputs.tsx`)<br />Text/Icon: `modeTokens.text.default`, `.muted`, `.light`, `.brand`, `.positive`, `.negative`, `.link`, `modeTokens.icon.muted/default/brand` (`buttons.ts`, `CustomSelect.tsx`, `navigation/menu.ts`, `ModeToggle.tsx`, `ThemeModeProvider.tsx`)<br />Borders: `modeTokens.border.default`, `.brand`, `.positive`, `.negative`, `.muted` (`CustomSelect.tsx`, `buttons.ts`, `inputs.tsx`, `table.ts`, `ModeToggle.tsx`) | Light values (examples): `bg.brand.default = #0060fe`, `bg.brand.muted = #edf8ff`, `bg.muted = #f5f5f5`, `text.default = #0a0a0a`, `text.muted = #737373`, `icon.muted = #737373`, `border.default = #d4d4d4`, `border.brand = #0060fe`<br />Dark values: `bg.brand.default = #0675ff`, `bg.brand.muted = rgba(14, 41, 93, 0.8)`, `bg.muted = #262626`, `text.default = #f5f5f5`, `text.muted = #a1a1a1`, `icon.muted = #a1a1a1`, `border.default = #404040`, `border.brand = #1e95ff` |
| `theme.tokens.modes[mode].colors`              | _Not referenced via `theme.tokens` (palette construction relies on `designTokens.modes.*.colors` instead)_                                                                                                                                                                                        | —                                                                                                        |
| `theme.tokens.modes[mode].custom`              | Focus/alert rings: `modeTokens.custom.focused` / `.destructive` (`CustomSelect.tsx`, `inputs.tsx`)                                                                                                                                                                                                | Light: `focused = rgba(0, 96, 254, 0.3)`, `destructive = rgba(251, 44, 54, 0.3)`<br />Dark: `focused = rgba(0, 96, 254, 0.8)`, `destructive = rgba(251, 44, 54, 0.8)` |
| `theme.tokens.modes[mode].logo`                | _Not referenced yet_                                                                                                                                                                                                                                                                             | —                                                                                                        |
| `theme.tokens.modes[mode].alpha.white` / `.alpha.black` | _Not referenced yet_                                                                                                                                                                                                                                                                             | —                                                                                                        |
