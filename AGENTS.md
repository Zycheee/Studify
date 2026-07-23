# Agent Instructions for Studify

## Overview
Studify is a React-based web application built with Vite, Tailwind CSS 4, and MUI.

## Core Commands
- **Development:** `npm run dev` (starts Vite dev server)
- **Build:** `npm run build`
- **Preview:** `npm run preview`

## Project Structure (`src/`)
- `pages/`: Application views/pages.
- `api/`: API integration/calls.
- `context/`: Global state management.
- `lib/`: Utility functions and shared helpers.
- `App.jsx`, `main.jsx`: Main entry points.

## Conventions & Quirks
- **Documentation:** The `README.md` is minimal. Do not rely on it for project context.
- **Styling:** Uses Tailwind CSS 4 and MUI. Ensure new components align with this styling strategy.
- **Routing:** Uses `react-router-dom` with custom `ProtectedRoutes.jsx`, `PublicRoute.jsx`, and `RootRedirect.jsx` for navigation control.
