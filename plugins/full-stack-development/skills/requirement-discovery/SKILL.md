---
name: requirement-discovery
description: Use when a user gives a rough product, feature, or app goal and Codex must draft the first structured requirement contract before design or implementation.
---

# Requirement Discovery

This skill turns a rough user goal into the first product-development contract. The user only needs to provide a rough goal, corrections, and confirmations.

The agent must draft information architecture, draft interaction structure, draft state requirements, draft API/data assumptions, and draft acceptance boundaries. Do not ask the user to provide IA, interaction matrices, state matrices, API contracts, or acceptance criteria from scratch.

## Input Artifacts

- User rough request
- Existing project context when available
- Prior change record when this is a resumed or changed feature

## Output Artifact

- `docs/full-stack-development/requirements/<feature-slug>/01-intake/requirement-discovery.md`

## Required MCP Tool

- `generate_requirement_workspace`
- `review_artifact_contract`
- `review_stage_gate`

## Hard Stops

- Do not enter Pencil/Figma.
- Do not write implementation code.
- Do not ask more than at most three focused questions before drafting assumptions.
- Do not treat a chat summary as a project artifact.

## Pressure Test Responsibility

- `rough-admin-one-line` must produce a usable draft.
- `over-clarification` must block when the agent asks too many questions without a draft.
- `empty-requirement-discovery` must block.

## Next Gate

- Product scope may proceed only after `review_artifact_contract` passes for requirement discovery.

