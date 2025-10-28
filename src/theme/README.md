# MUI Custom Theme

A modular, type-safe Material-UI theme system following MUI's recommended structure with design tokens.

## 📁 Structure

```text
theme/
├── index.ts            # Main theme export
├── palette.ts          # Light mode color palette
├── darkPalette.ts      # Dark mode color palette
├── typography.ts       # Typography configuration
├── spacing.ts          # Spacing scale (4px grid)
├── shape.ts            # Border radius configuration
├── components.ts       # Component style overrides
├── breakpoints.ts      # Responsive breakpoints
├── declarations.d.ts   # TypeScript module augmentation
└── tokens/             # Design tokens (source of truth)
    ├── index.ts        # Main tokens export
    ├── types.ts        # TypeScript type definitions
    ├── colors.ts       # Color scales
    ├── spacing.ts      # Spacing values
    ├── typography.ts   # Typography tokens
    ├── radius.ts       # Border radius values
    └── modes.ts        # Light/dark mode colors
```

## 🎨 Design Tokens

Design tokens are the single source of truth for all design values, organized into:

### Primitives

Raw values that form the foundation:

- **Colors**: Base colors, brand scale, neutral scale, semantic colors (green, red, yellow, cyan, purple)
- **Spacing**: 4px grid system (0-96)

### Theme

Design decisions built on primitives:

- **Typography**: Font families, sizes, line heights
- **Shape**: Border radius scale
- **Fonts**: Roboto (sans), Roboto Mono (mono)

### Modes

Theme-specific color mappings:

- **Light mode**: Default color scheme
- **Dark mode**: Inverted color scheme

## 🚀 Usage

### Basic Usage

```typescript
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### Dark Mode

```typescript
import theme, { darkTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const currentTheme = mode === 'light' ? theme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### Accessing Theme Values

```typescript
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        // Use theme values
        color: theme.palette.primary.main,
        spacing: theme.spacing(2), // 8px
        borderRadius: theme.shape.borderRadius,
        typography: theme.typography.h1,

        // Access design tokens directly
        backgroundColor: theme.tokens.modes.light.bg.default,
      }}
    >
      Content
    </Box>
  );
}
```

### Accessing Design Tokens

```typescript
import { designTokens } from './theme';

// Access colors
const brandColor = designTokens.primitives.colors.brand[600]; // '#0675ff'

// Access spacing
const spacing = designTokens.primitives.spacing[4]; // 16

// Access typography
const h1Size = designTokens.theme.text.H1['font-size']; // 44
```

## 📦 Configuration Files

### `palette.ts`

Defines the color scheme for light mode:

- Primary, secondary, success, error, warning, info colors
- Text colors (primary, secondary, disabled)
- Background colors
- Grey scale
- Action states (hover, selected, disabled, focus)

### `darkPalette.ts`

Defines the color scheme for dark mode with inverted scales.

### `typography.ts`

Configures all text styles:

- Font family and weights
- Headings (h1-h6)
- Body text (body1, body2)
- Subtitles, captions, buttons, overlines

### `spacing.ts`

Provides a spacing function based on 4px grid:

```typescript
spacing(1); // "4px"
spacing(2); // "8px"
spacing(0.5); // "2px"
```

### `shape.ts`

Defines border radius (default: 8px).

### `components.ts`

Customizes default MUI component styles:

- Button: No text transform
- Card: Custom border radius
- Paper: Custom border radius

### `breakpoints.ts`

Defines responsive breakpoints:

- xs: 0px
- sm: 600px
- md: 960px
- lg: 1280px
- xl: 1920px

## 🎯 Customization

### Modify Colors

Edit `tokens/colors.ts`:

```typescript
export const brandColors: ColorScale = {
  50: '#your-color',
  // ... 100-800
  900: '#your-color',
} as const;
```

### Modify Typography

Edit `tokens/typography.ts`:

```typescript
export const typographyScale: TypographyScale = {
  H1: {
    'font-size': 48, // Change size
    'line-height': 56,
  },
  // ...
} as const;
```

### Modify Spacing

Edit `tokens/spacing.ts`:

```typescript
export const spacing: SpacingScale = {
  // ... existing values
  100: 400, // Add new value
} as const;
```

### Customize Components

Edit `components.ts`:

```typescript
const components: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: {
        // Your custom styles
      },
    },
  },
  // Add more component overrides
};
```

## 📊 Color Scales

All color scales have shades from 50 (lightest) to 900 (darkest):

- **50-200**: Light tints
- **300-400**: Medium tints
- **500**: Base color (default)
- **600-700**: Medium shades
- **800-900**: Dark shades

In dark mode, scales are inverted automatically.

## 🎨 Semantic Colors

- **Primary**: Brand color (blue)
- **Secondary**: Purple
- **Success**: Green
- **Error**: Red
- **Warning**: Yellow
- **Info**: Cyan

## 📝 Best Practices

1. **Use theme values** instead of hardcoded values
2. **Use semantic colors** for UI states (success, error, warning)
3. **Use the spacing function** for consistent spacing
4. **Leverage TypeScript** for autocomplete and type checking
5. **Access tokens through theme** for consistency
6. **Follow MUI conventions** for component customization

## 🔍 File Reference

| File             | Purpose                         |
| ---------------- | ------------------------------- |
| `index.ts`       | Main theme creation and export  |
| `palette.ts`     | Light mode colors               |
| `darkPalette.ts` | Dark mode colors                |
| `typography.ts`  | Font styles and sizes           |
| `spacing.ts`     | Spacing scale function          |
| `shape.ts`       | Border radius                   |
| `components.ts`  | Component overrides             |
| `breakpoints.ts` | Responsive breakpoints          |
| `tokens/`        | Design tokens (source of truth) |

## 📚 Resources

- [MUI Theming Documentation](https://mui.com/material-ui/customization/theming/)
- [MUI Default Theme](https://mui.com/material-ui/customization/default-theme/)
- [Design Tokens](https://www.designtokens.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
