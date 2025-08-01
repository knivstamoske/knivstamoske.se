# ADR-001: Adopt SvelteKit as the Primary Web Framework

**Status:** Accepted

**Date:** 2025-08-01

## Context

The project requires a modern web framework for building a multilingual website with server-side rendering capabilities. We need a solution that supports:

- Server-side rendering (SSR) for SEO optimization
- Static site generation capabilities if necessary
- TypeScript integration
- Flexible routing system
- Good performance characteristics

## Decision

We will use SvelteKit as the primary web framework.

## Consequences

**Positive:**

- Built-in SSR and static generation support improves SEO and performance
- Excellent TypeScript integration out of the box
- File-based routing system simplifies project structure
- Smaller bundle sizes compared to React/Vue equivalents
- Strong integration with Vite for fast development builds
- Fast development experience with hot reloading
- Flexible deployment options

**Negative:**

- Smaller ecosystem compared to React/Vue
- Fewer third-party components available
- Learning curve for developers unfamiliar with Svelte
