# 电商管理后台 - Pencil/Figma 视觉确认计划

## 当前结论

当前不允许进入 Pencil/Figma。原因是变更 0001 已将阶段回退到 `product-requirements`，更新后的需求工作区尚未获得用户确认，也尚未通过 `review_requirement_workspace_stage(targetStage="visual-design")`。

## 视觉编排计划

选用 Figma 或 Pencil 均可。若使用 Figma，必须先加载 `figma:figma-use` 和 `figma:figma-create-new-file`。若使用 Pencil，必须先调用 `get_editor_state(include_schema: true)`。

## 必需导出

- desktop：总览、订单、商品、库存、用户、运营数据的桌面完整工作流。
- mobile：移动端导航、筛选、列表、详情的完整工作流。
- component-detail：HeroUI Table、Drawer、Modal、Button、Select、DateRangePicker、Badge、Chip、Tabs、Toolbar、Skeleton、Alert、Toast、Pagination、Tooltip、Card 的细节板。
- state-matrix：default、loading、empty、error、success、disabled、permission-denied、editing、mobile-collapsed。

## 用户确认记录要求

视觉证据必须写入 `04-visual/visual-evidence.md`，包含 tool、changeId、exports、component coverage、state coverage、approvalRecord。approvalRecord 必须包含 approvedBy、approvedAt、scope。

## TailwindUI 参考

本地路径 `D:\BaiduNetdiskDownload\TailwindUI 持续更新\tailwindui plus 20250831\tailwindui plus 20250831\v4.1` 仅可作为视觉/布局/模式参考，不可复制源码、模板、资源或 Catalyst primitives。

## User confirmation

Status: pending

## Confirmed Facts

视觉确认必须包含 desktop、mobile、component-detail、state-matrix 四类导出和用户审批记录。

## AI Assumptions

Figma 是本次计划的默认设计工具；Pencil 可作为等价替代，但必须先读取 schema。

## Open Questions

需要用户确认使用 Figma 还是 Pencil，并确认更新后的需求工作区。

## Out of Scope

当前阶段不创建设计文件、不导出图片、不进入前端实现。

## Downstream Use

本文件供 visual-design-orchestrator、visual-evidence-gate 和 implementation gate 使用。

## PASS Condition

需求门禁通过、设计板清单齐全、四类导出获得用户确认并写入证据后，才允许实施。
