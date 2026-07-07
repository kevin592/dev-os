---
name: implementation-planner
description: Use after requirements, contracts, and visual gates pass to create a TDD-ready implementation plan.
---

# Implementation Planner

This skill creates a task-by-task implementation plan that can be executed with TDD and reviewed after each task.

## Input Artifacts

- `00-stage.json`
- `00-artifact-registry.json`
- Product, IA, interaction, state, backend/API/frontend, visual, and acceptance contracts
- Visual confirmation when UI applies

## Output Artifact

- `docs/full-stack-development/requirements/<feature-slug>/05-implementation/implementation-plan.md`

## Required MCP Tool

- `review_stage_gate`
- `review_artifact_contract`
- `review_visual_evidence` when UI applies
- `generate_frontend_verification_checklist` when UI applies

## Hard Stops

- Do not plan implementation when requirements are unapproved.
- Do not plan UI implementation when Pencil/Figma evidence is missing, incomplete, stale, or not reviewed.
- Do not create tasks without test commands and expected failure reasons.

## Pressure Test Responsibility

- Plans without failing tests block.
- Plans without exact files block.
- Plans without verification commands block.

## Next Gate

- `implementation-in-progress` may start only after the implementation plan artifact passes review.
