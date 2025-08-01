# ADR-003: Implement Inlang Paraglide for Internationalization

**Status:** Accepted

**Date:** 2025-08-01

## Context

The website needs to support multiple languages (Swedish, English, Arabic) with proper internationalization. We need a solution that provides:

- Good developer experience
- Integration with modern build tools (Vite)

## Decision

We will use Inlang Paraglide for internationalization.

## Consequences

**Positive:**

- Compile-time translation bundling improves runtime performance
- Type-safe API prevents translation key errors
- Automatic tree-shaking of unused translations
- Good integration with Vite and SvelteKit
- Support for complex language features like RTL (Arabic)
- Active development and modern tooling
- Good developer experience with IDE support

**Negative:**

- Build-time dependency adds complexity to build process
- Fewer community resources compared to react-i18next
- Requires rebuilding for translation changes during development
