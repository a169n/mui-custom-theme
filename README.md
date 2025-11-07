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
| `theme.tokens.primitives['border-radius']`  | Rounded aliases (`rounded-md`, `rounded-2xl`, `rounded-full`)        |
| `theme.tokens.primitives['border-width']`   | Stroke widths (`border`, `border-2`, …)                              |
| `theme.tokens.primitives.opacity`           | Opacity percentages (0 → 100)                                        |
| `theme.tokens.primitives['line-height']`    | `leading-*` helpers for vertical rhythm                              |
| `theme.tokens.primitives.default`           | Default text color (neutral 950)                                     |

Available color ramps: `base`, `brand`, `neutral`, `cyan`, `green`, `lime`, `orange`, `pink`, `purple`, `red`, `rose`, `teal`, and `yellow`.

Example:

```ts
const cardPadding = theme.tokens.primitives.spacing[6]; // 24
const chipRadius = theme.tokens.primitives['border-radius']['rounded-full']; // 9999
```

### `modes`

Mode aware tokens that swap when `theme.palette.mode` is `light` or `dark`.  
Each mode bundles both the typographic foundations and appearance colors.

| Path                                                          | Description                                                            |
| ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `theme.tokens.modes[mode].font`                               | Font families (`font-sans`, `font-mono`)                               |
| `theme.tokens.modes[mode].typography`                         | Full typography scale (`H1`, `Subtitle`, `textXs`, …)                  |
| `theme.tokens.modes[mode].breakpoint`                         | Tailwind-like breakpoint values (`sm`, `md`, `lg`, `xl`, `2xl`, `3xl`) |
| `theme.tokens.modes[mode].container`                          | Container widths (`3xs` → `8xl`)                                       |
| `theme.tokens.modes[mode]['font-weight']`                     | Weight names (`Regular`, `Medium`, `Semibold`, `Bold`)                 |
| `theme.tokens.modes[mode].radius`                             | Corner radii (`xs` → `7xl`)                                            |
| `theme.tokens.modes[mode].shadow`                             | Shadow palettes (`black`, `white`, `brand`, `negative`, `positive`)    |
| `theme.tokens.modes[mode].bg` / `.text` / `.icon` / `.border` | Mode specific semantic colors                                          |
| `theme.tokens.modes[mode].colors`                             | Semantic ramps remapped for the active mode                            |
| `theme.tokens.modes[mode].custom`                             | Focus/destructive overlays                                             |
| `theme.tokens.modes[mode].logo`                               | Brand/logo colors (`default`, `stage`, `test`)                         |
| `theme.tokens.modes[mode]['alpha-white']` / `['alpha-black']` | Alpha ramps for overlays                                               |

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
