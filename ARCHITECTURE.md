# Calculator App Architecture

## Overview

test-c2 is a simple, clean web calculator that performs basic arithmetic operations. This is a pure frontend application with no authentication, database, or backend API requirements. The app provides instant calculations without any user accounts or data persistence.

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui with Radix primitives
- **Styling**: CSS variables with clean, minimal design tokens
- **State Management**: React hooks for calculator state
- **Design**: Light theme with neutral colors, inspired by classic calculator apps

## Data Model

No database or persistent data storage required. All state is managed client-side in React components:

### Calculator State
```typescript
interface CalculatorState {
  display: string;           // Current display value
  previousValue: number;     // Previous operand
  operation: string | null;  // Current operation (+, -, ×, ÷)
  waitingForNewValue: boolean; // Flag for next input
}
```

## Route Structure

This is a single-page application with only one route:

```
/                     # Calculator interface (main page)
```

## Component Architecture

```
src/
├── app/
│   ├── layout.tsx           # Root layout with fonts and styling
│   ├── page.tsx             # Main calculator page
│   └── globals.css          # Global styles and design tokens
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx       # Button component for calculator buttons
│   │   └── card.tsx         # Card component for calculator container
│   └── calculator/
│       ├── calculator.tsx   # Main calculator component
│       ├── display.tsx      # Calculator display component
│       └── button-grid.tsx  # Calculator button grid component
└── lib/
    ├── utils.ts             # Utility functions
    └── calculator-logic.ts  # Calculator operation logic
```

## Data Flow

### Calculator Logic Flow
1. **Input**: User clicks number button → Update display state
2. **Operation**: User clicks operation button → Store previous value and operation
3. **Calculation**: User clicks equals → Perform calculation and show result
4. **Clear**: User clicks clear → Reset all state to initial values

### State Management
- Calculator state managed in main Calculator component
- Display component receives current display value
- ButtonGrid component receives click handlers for all buttons
- No external state management needed (no Redux, Context, etc.)

## Key Features

### Calculator Operations
- **Numbers**: 0-9 digit input
- **Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- **Controls**: Equals (=) for calculation, Clear for reset
- **Display**: Shows current input or calculation result

### User Experience
- Clean, minimal interface design
- Responsive design for desktop and mobile
- Instant feedback on button interactions
- Standard calculator behavior and logic

### Design System
- Light theme with neutral colors
- Clean typography using DM Sans (headings) and Source Sans Pro (body)
- Consistent spacing and border radius (0.5rem for sharp, professional look)
- Accessible contrast ratios throughout

## Performance Considerations

- Pure frontend app with no network requests
- Minimal JavaScript bundle size
- Efficient re-rendering with React hooks
- No database queries or API calls
- Static deployment ready

## Security

Since this is a public calculator with no authentication or data persistence:
- No user data to protect
- No authentication vectors
- No database to secure
- Input validation for numeric operations only
- XSS protection through React's built-in escaping

## Deployment

- Static site deployment ready
- No backend services required
- No environment variables needed
- Works entirely in the browser
- Can be deployed to any static hosting provider

## Future Enhancements (Out of Scope)

- Scientific calculator functions
- Memory operations
- Calculation history
- Keyboard input support
- Dark mode theme toggle