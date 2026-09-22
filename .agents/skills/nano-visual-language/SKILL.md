---
name: nano-visual-language
description: Apply or review NanoNative visual identity across websites, interfaces, documentation, blogs, social media, and mascot illustrations. Use for brand colors, themes, typography, composition, or character consistency in any authoring tool or project.
---

# NanoNative visual language

Use the [canonical specification](../../../docs/specs/nano-visual-language.md)
for design rules, role values, and the mascot profile. It is independently
usable; this skill provides an optional application workflow. Read the
[ADR](../../../docs/adr/0001-semantic-visual-language.md) when changing the design
model or its representation.

These paths are relative to this distribution, not the consumer's working
project. Keep the specification available when moving the skill; its optional
reference images may accompany it. Do not maintain a second palette or mascot
profile inside the skill.

## Apply the language

1. Derive a compact output brief from the request and existing context: purpose,
   audience, medium, dimensions or available space, theme, density, content, and
   publisher. Resolve only missing choices that materially affect the output.
2. Use the specification's identity/adaptation distinction. Preserve Nano's
   pink/blue identity, logo, mascot anatomy, and semantic meanings. Adapt layout,
   spacing, typeface, pose, and crop to the medium.
3. Map semantic roles into the selected tool's native representation. Follow its
   interaction and accessibility conventions. Do not introduce a framework,
   component library, or token pipeline merely to apply the visual language.
4. Read the relevant medium section: interface behavior for interactive work,
   documentation for technical content, editorial rules for blogs, or social
   composition rules for shareable graphics. Fixed artwork needs an output
   theme, not an interactive theme selector. The editorial portrait composition
   is an optional profile; derive publisher identity and format from the output
   brief rather than making the reference's personal footer a universal default.
5. For mascot work, follow
   [Using the written profile](../../../docs/specs/nano-visual-language.md#using-the-written-profile).
   Build the brief
   from concept, pose, expression, prop, composition, and final display size.
   Apply the profile's required and optional features while varying the scene.
   An individual reference pose does not add anatomical requirements; do not
   infer extra anatomy from occluded details.

## Verify the output

Use the specification's applicable conformance checks at the actual delivery
boundary. Inspect rendered states and contrast for interfaces, reading order and
examples for technical content, crops and metadata for publishing, and silhouette,
materials, face, wings, springs, and N badge for mascot illustrations.

Report performed checks and remaining limitations. Keep calculations, rendered
output checks, and external platform observations distinct. Update the canonical
specification when changing a design rule instead of accumulating local variants
in this skill.
