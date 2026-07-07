# 电商管理后台 - 验收需求

## 阶段验收

- 未通过 `review_requirement_workspace_stage(targetStage="visual-design")` 前，不允许进入 Pencil/Figma。
- 未获得用户批准的 desktop、mobile、component-detail、state-matrix 导出图前，不允许前端实现。
- 未通过 `review_requirement_workspace_stage(targetStage="implementation")` 和 `review_stage_gate(targetStage="implementation")` 前，不允许写代码。

## 功能验收

- 订单、商品、库存、用户、运营数据页面均有列表、筛选、搜索、状态反馈和详情入口。
- 库存页面展示批次有效期、临期/过期状态和权限限制。
- 无权限角色不能通过 UI 或 API 获取敏感字段或执行受限动作。

## HeroUI 验收

- 所有可由 HeroUI 覆盖的组件从 `@heroui/react` 导入。
- 没有本地 Button/Table/Drawer/Modal 等 shadow components。
- 没有 shadcn/Radix/Base UI/CVA/Headless UI/Catalyst 源码引入。
- TailwindUI v4.1 仅记录为 reference-only。

## 质量门禁

- `review_visual_inspection_metrics`：截图非空、类别齐全、diff、重叠、裁剪、对比度合格。
- `review_hero_ui_component_graph_audit`：HeroUI 官方导入完整，无本地 shadow component。
- `review_backend_contract_audit`：endpoint、auth、idempotency、request fields、error codes 合格。
- `review_code_review_gate`：有 review summary，无未解决 blocker/high，测试/视觉/后端审查完成。
- `review_hero_ui_docs_freshness`：官方 AGENTS/llms/components/patterns/full 快照完整且未过期。

## User confirmation

Status: pending after change 0001

## Confirmed Facts

验收必须覆盖需求门禁、视觉门禁、HeroUI 合规、后端契约、代码审查和完成门禁。

## AI Assumptions

UI 验收需要桌面、移动、组件细节和状态矩阵截图；后端验收需要鉴权、错误码和幂等证据。

## Open Questions

需要确认项目实际测试命令、浏览器截图标准、可访问性阈值和发布流程。

## Out of Scope

不把聊天确认、单个截图或自我声明作为完成证据。

## Downstream Use

本文件供 quality-auditor、completion-verifier 和最终验收报告使用。

## PASS Condition

所有验收标准可由命令、截图、审查记录或用户确认验证后，才能进入完成声明。
