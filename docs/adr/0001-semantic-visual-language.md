# ADR 0001: Use a platform-independent visual language

Status: Proposed

## Context

NanoNative needs a recognizable identity across interfaces, technical content,
editorial publishing, social media, and illustration. These outputs have different
layouts, interaction capabilities, themes, and rendering tools. A specification
based on one application's classes, components, or publishing workflow would
make its implementation details constraints for unrelated consumers.

Brand colors also have different jobs from functional colors: a pastel logo can
remain recognizable while readable text and controls require stronger contrast.
The mascot needs a stable identity without fixing every pose or scene.

## Decision

Define the [visual language](../specs/nano-visual-language.md) through identity
invariants, semantic roles, adaptive composition rules, and observable behavior.
Keep the core independent of tools and projects. Scope medium-specific behavior
to the medium that can support it.

Separate brand primitives from functional color roles and provide light/dark
reference mappings. Preserve the pink/blue identity, original logo, and mascot
profile. Allow layout, density, typeface, illustration pose, and output dimensions
to adapt while preserving meaning, readability, and recognition.

Keep design rules and reference values in the specification, rationale in this
ADR, and application instructions in the skill. Consumers map the same roles to
their native styles, controls, resources, or publishing formats. No framework,
font package, component library, token compiler, or design application is required.

If a consumer needs token interchange, it may serialize the roles using the
[DTCG format](https://www.designtokens.org/tr/2025.10/format/) or a suitable native
format. Such a mapping must not become a competing source of brand rules.

## Alternatives considered

| Alternative | Assessment |
| --- | --- |
| Use one application's styling configuration as the standard | Convenient locally, but exposes framework and project assumptions to other consumers. |
| Publish only a palette and mood board | Portable inspiration, but insufficient to preserve accessible roles, behavior, or mascot identity. |
| Require one shared component library and production pipeline | Standardizes an implementation at the cost of excluding media and tools that cannot use it. |

## Consequences

The language can be applied in different tools without reproducing a particular
website. Stable identity rules coexist with adaptable composition and native
interaction conventions. The standard introduces no runtime dependency.

Each consumer remains responsible for its implementation and verification at
the actual output boundary. Shared color values alone do not prove accessible
controls, correct metadata, consistent mascot rendering, or valid platform crops.
