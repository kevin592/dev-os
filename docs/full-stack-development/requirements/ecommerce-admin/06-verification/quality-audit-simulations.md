# Quality audit simulations

## Gate results

| Gate | blocked boundary | pass boundary |
| --- | --- | --- |
| review_visual_inspection_metrics | 缺 mobile/component-detail/state-matrix，desktop 非空率 0.03、diff 0.32、有重叠、裁剪、对比度问题，返回 blocked。 | 四类截图齐全，width/height 存在，nonBlankRatio >= 0.95，diffRatio <= 0.02，无重叠/裁剪/对比度问题，返回 pass。 |
| review_hero_ui_component_graph_audit | 文件使用 `@/components/ui/button`、Radix，并声明本地 `Table`，缺少 required HeroUI imports，返回 blocked。 | 文件从 `@heroui/react` 导入 Table、Drawer、Modal、Button、Select、Badge，无 shadow component，返回 pass。 |
| review_backend_contract_audit | `GET /api/inventory/batches` 未证明鉴权、缺 `permissionScope` 校验、缺错误码；`PATCH /api/inventory/batches/:id/alert-rule` 未实现，返回 blocked。 | endpoint 全实现，authChecked、idempotencyChecked、requestFields、errorCodes 对齐，返回 pass。 |
| review_code_review_gate | 缺 summary，有未解决 high finding，tests/visual/backend 均未 review，返回 blocked。 | 有 summary，无未解决 blocker/high，testsReviewed、visualReviewed、backendReviewed 为 true，返回 pass。 |
| review_hero_ui_docs_freshness | docs fetchedAt 为 2026-05-01，超过 7 天且 manifest 缺 required docs，返回 blocked。 | fetchedAt 为 2026-07-06，agents/llms/components/patterns/full 均有 64 位 sha256 和足够 bytes，返回 pass。 |

## Tool boundary found

这些质量工具需要结构化对象输入。用自然语言字符串模拟截图、代码文件或 manifest 会被正确阻断，但不能代表 pass 边界。
