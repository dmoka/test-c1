# Project Spec: test-c2

# test-c2

## Purpose
A simple, clean web calculator that performs basic arithmetic operations (addition, subtraction, multiplication, division) for anyone who needs quick calculations. No accounts, no complexity — just a functional calculator that works instantly.

## Audience
General public - anyone needing basic calculations

## Design
- Theme: light
- Colors: clean colors
- Font feel: clean and simple
- Inspiration: classic calculator apps
- Avoid: anything flashy or complex

## Pages
### Calculator (/)
Main calculator interface with display and button grid
**Shows:** Digital display showing current number or calculation result, grid of calculator buttons (0-9, +, -, ×, ÷, =, Clear)
**Actions:** Click number buttons to input digits, Click operation buttons (+, -, ×, ÷) to perform calculations, Click equals (=) to get result, Click Clear to reset calculator
**Logic:** Display shows current input or calculation result. Operations follow standard calculator logic - number, operator, number, equals. Clear resets everything to zero.

## User Flows
- User opens calculator → sees display showing 0 → clicks numbers to input first value → clicks operation button → clicks numbers for second value → clicks equals → sees result
- User performs calculation → clicks Clear → calculator resets to 0 → ready for new calculation

## Business Rules
- Standard calculator order of operations
- Display shows current input while typing, shows result after equals
- Clear button resets display to 0 and clears any pending operations

## Design Notes
- Keep design super clean and minimal
- Light theme with neutral colors
- Focus on usability and clarity

## Authentication
No authentication. This is a public app — no login required.

# Feature Addition

# test-c2

## Purpose
A simple, clean web calculator that performs basic arithmetic operations (addition, subtraction, multiplication, division) for anyone who needs quick calculations. No accounts, no complexity — just a functional calculator that works instantly.

## Audience


## Design
Clean and modern

## Pages
### Calculator (/)



## Authentication
Email/password auth is pre-built (login, signup, logout, session management).
User model has a role field: "admin" or "user".
First user to sign up becomes admin automatically.
Use Supabase auth: supabase.auth.getUser() for auth checks. RLS handles row-level filtering automatically.
No admin role. All users have equal access to their own data.

# Feature Addition

# test-c2

## Purpose
A simple, clean web calculator that performs basic arithmetic operations (addition, subtraction, multiplication, division) for anyone who needs quick calculations. No accounts, no complexity — just a functional calculator that works instantly.

## Audience


## Design
Clean and modern

## Pages
### Calculator (/)



## Authentication
Email/password auth is pre-built (login, signup, logout, session management).
User model has a role field: "admin" or "user".
First user to sign up becomes admin automatically.
Use Supabase auth: supabase.auth.getUser() for auth checks. RLS handles row-level filtering automatically.
No admin role. All users have equal access to their own data.
