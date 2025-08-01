# ADR-004: Set Swedish as Base Locale with English and Arabic Support

**Status:** Accepted

**Date:** 2025-08-01

## Context

The website serves the Islamiska Kulturcenter Knivsta community and needs to support multiple languages. We need to decide:

- Which language should be the base/default locale
- Which additional languages to support
- How to handle right-to-left (RTL) languages

## Decision

We will use Swedish (sv) as the base locale with English (en) and Arabic (ar) as additional supported languages.

## Consequences

**Positive:**

- Swedish is the primary language for the local community in Knivsta, Sweden
- English provides accessibility for international visitors and non-Swedish speakers
- Arabic serves the Islamic community members who prefer Arabic content
- Three languages provide good coverage without excessive maintenance overhead
- Arabic RTL support demonstrates inclusive design practices

**Negative:**

- Arabic RTL support adds complexity to CSS and layout
- Content translation overhead for three languages
- Potential for translation inconsistencies across languages
- Additional testing required for RTL layouts
