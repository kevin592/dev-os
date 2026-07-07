# Full Stack Stage Contract

Use this reference when a rough request must become a stable full-stack delivery plan.

## Workspace

All artifacts live under:

`docs/full-stack-development/requirements/<feature-slug>/`

The workspace is agent-owned. The user confirms and corrects; the user is not expected to supply architecture, interaction, API, data, state, or acceptance detail from scratch.

## Stage File

`00-stage.json` is mandatory.

It must track:

- `currentStage`
- `nextAllowedStage`
- `approvals.requirementsApproved`
- `approvals.visualDesignApproved`
- `approvals.implementationApproved`
- blocked gates
- change policy
- latest change id

Generated empty templates are not enough. Pencil/Figma requires user-confirmed requirements.

## Full-Stack Requirement Layers

Required layers:

| Layer | Required Content |
| --- | --- |
| rough request | raw ask, agent interpretation, scope, unknowns |
| business requirements | why, success metrics, business rules, priority, risk |
| product requirements | users, tasks, workflows, feature scope, non-goals |
| information architecture | objects, hierarchy, navigation, data fields, content priority |
| interaction matrix | triggers, actions, feedback, permissions, keyboard behavior |
| state requirements | loading, empty, error, success, disabled, editing, mobile |
| backend/data requirements | entities, schema, storage, migrations, validation, retention |
| API contract | endpoints/actions, inputs, outputs, errors, auth, idempotency |
| frontend contract | routing, component boundaries, state management, responsive behavior |
| HeroUI visual contract | official HeroUI components, Pencil/Figma exports, no hand-written UI |
| engineering contract | implementation boundaries, tests, observability, deployment |
| acceptance contract | how correctness is judged, commands, screenshots, failure criteria |

## Gates

Before Pencil/Figma:

- Fixed workspace exists under `docs/full-stack-development/requirements/<feature-slug>/`.
- `00-stage.json` exists and marks requirements approved.
- IA, interaction, state, backend/data, API, frontend, engineering, and acceptance contracts exist when applicable.
- `review_requirement_workspace_stage` passes for `targetStage: "visual-design"`.
- For React Web UI, use `hero-ui-craft`.

Before implementation:

- Visuals are approved when UI exists.
- Visual evidence passes `review_visual_evidence`, including desktop, mobile, component-detail, state-matrix, approval record, and current change id.
- Backend/data/API contracts are approved when server work exists.
- `review_requirement_workspace_stage` passes for `targetStage: "implementation"`.

Before completion:

- Tests pass.
- Build passes.
- Browser screenshots pass when UI exists.
- Accessibility checks pass when UI exists.
- API/data migration checks pass when backend/data changed.
- Acceptance contract is satisfied.

## Requirement Changes

Every change after initial intake must create a change record under:

`docs/full-stack-development/requirements/<feature-slug>/changes/`

The change record must include:

- user change request
- impacted layers
- artifacts to update
- invalidated approvals
- stage regression target
- required re-verification

If a change affects product, IA, interaction, state, frontend, HeroUI, backend, data, API, engineering, or acceptance, regress to the earliest impacted stage before editing design or code.

## HeroUI Boundary

HeroUI remains the React Web UI system of record. When frontend UI is involved:

- Read and follow `hero-ui-craft`.
- Read official HeroUI React `AGENTS.md` first.
- Use `@heroui/react` official components when available.
- Do not hand-write or clone HeroUI components.
- Use Pencil/Figma before implementation.
- Use `generate_design_board_inventory` before design work and `review_visual_evidence` before implementation.
