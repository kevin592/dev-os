# Visual design orchestration plan

## Status

planned-blocked-before-design

## Required before start

- `review_requirement_workspace_stage(targetStage="visual-design")` must pass.
- `generate_design_board_inventory` must pass.
- User must confirm the updated requirement workspace after change 0001.

## Board inventory

- desktop: full admin workflow.
- mobile: full mobile workflow.
- component-detail: HeroUI component anatomy, variants, spacing, tokens.
- state-matrix: default, loading, empty, error, success, disabled, permission-denied, editing, mobile.

## Evidence needed before implementation

- Export paths for all four categories.
- User approval record with approvedBy, approvedAt, and scope.
- `review_visual_design_orchestration` pass.
- `review_visual_evidence` pass.
- `review_stage_gate(targetStage="implementation")` pass.

## Current decision

Do not open Pencil/Figma yet.
