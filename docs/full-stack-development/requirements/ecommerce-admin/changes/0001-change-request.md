# 电商管理后台 - change request 0001

## User change request

库存页面需要增加批次有效期预警和权限控制。

## Impacted layers

- product-requirements
- information-architecture
- interaction-requirements
- state-requirements
- backend-data
- API contract
- frontend contract
- engineering-contract
- acceptance-contract

## Stage regression

工具 `plan_requirement_change` 返回 `resetToStage: product-requirements`。工具 `plan_change_impact` 返回 `resetToStage: product-scope`，语义上均表示必须回退到产品/需求范围层，而不是直接修改前端。

当前采用主技能阶段名：`product-requirements`。

## Invalidated approvals

- requirementsApproved: false
- visualDesignApproved: false
- implementationApproved: false
- finalAcceptanceApproved: false

## Artifacts to update

- 03-product-requirements.md
- 04-information-architecture.md
- 05-interaction-matrix.md
- 06-state-requirements.md
- 07-visual-requirements.md
- 08-engineering-contract.md
- 09-acceptance-contract.md
- 10-visual-confirmation-plan.md
- 04-visual/visual-evidence.md, if it already existed

## Required re-verification

- Re-run `review_requirement_workspace_stage(targetStage="visual-design")`.
- Re-plan or re-export desktop/mobile/component-detail/state-matrix visuals.
- Re-run visual evidence and implementation gates before any code.
