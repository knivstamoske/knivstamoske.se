# ADR-005: Deploy to Cloudflare Pages

**Status:** Accepted

**Date:** 2025-08-01

## Context

The project requires a hosting platform that supports:

- Static site hosting with SSR capabilities
- Global CDN for fast content delivery
- Automatic deployments from Git
- Good performance and reliability
- Cost-effective pricing

## Decision

We will deploy the application to Cloudflare Pages.

## Consequences

**Positive:**

- Excellent global CDN performance with edge locations worldwide
- Native support for SvelteKit with automatic adapter configuration
- Generous free tier suitable for community websites
- Automatic deployments from GitHub integration
- Built-in analytics and performance monitoring
- Strong security features and DDoS protection
- Good support for custom domains
- Built-in security and performance optimizations

**Negative:**

- Vendor lock-in to Cloudflare ecosystem
- Limited server-side capabilities compared to full hosting
- Potential cold start delays for dynamic content
- Debugging production issues requires Cloudflare-specific knowledge
