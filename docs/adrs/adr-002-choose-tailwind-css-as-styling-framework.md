# ADR-002: Choose Tailwind CSS 4 as the Styling Framework

**Status:** Accepted

**Date:** 2025-08-01

## Context

The project requires a CSS framework for styling the SvelteKit application. We need a solution that supports:

- Rapid UI development
- Consistent design system
- Mobile-first responsive design
- Integration with component libraries

## Decision

We will use Tailwind CSS 4 as the primary styling framework.

## Consequences

**Positive:**

- Utility-first approach enables rapid prototyping and development
- Excellent integration with SvelteKit and Vite
- Built-in responsive design utilities support mobile-first approach
- Strong ecosystem with plugins like DaisyUI for component libraries
- Tree-shaking reduces final bundle size
- Version 4 provides improved performance and developer experience
- Consistent spacing, colors, and responsive breakpoints

**Negative:**

- Learning curve for developers unfamiliar with utility-first CSS
- HTML can become verbose with many utility classes
- Requires build process for optimization
