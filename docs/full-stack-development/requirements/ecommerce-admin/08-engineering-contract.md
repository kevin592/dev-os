# 电商管理后台 - 工程需求

## 项目栈检查

当前工作目录未发现 `package.json`、Next/Vite 配置、Tailwind 配置或既有源码，因此本次压测不进入工程实现。若后续进入实现阶段，需要先识别框架、包管理器、React 版本、Tailwind 版本、CSS 入口、数据层、API 风格和部署目标。

## HeroUI 官方上下文

已读取插件内置 HeroUI React v3 `references/official/react/AGENTS.md`，并通过 `get_hero_ui_agent_doc(doc="agents")` 与 `heroui-react` MCP 验证官方文档。Quick Start 要求 React 19+、Tailwind CSS v4、安装 `@heroui/react` 与 `@heroui/styles`，CSS 中 `@import "tailwindcss";` 必须在 `@import "@heroui/styles";` 之前。

## 禁止项

- 禁止 shadcn、`@/components/ui/*`、Radix、Base UI、CVA、Headless UI/Catalyst 源码导入。
- 禁止复制或改写 TailwindUI/Tailwind Plus 源码、模板、资源、截图。
- 禁止手写 HeroUI 已覆盖的 Button、Table、Drawer、Modal、Tooltip、Select、Tabs 等组件。

## HeroUI 组件映射

- 数据表：HeroUI Table + Pagination + Skeleton。
- 筛选栏：Toolbar + SearchField/Input + Select + DateRangePicker。
- 状态：Badge、Chip、Alert、Toast。
- 详情与编辑：Drawer、Modal、AlertDialog。
- 导航：Tabs、Breadcrumbs、Drawer。
- 指标卡片：Card、Surface、Typography、Meter/ProgressBar。

## 数据与 API 契约

核心实体：Order、Product、Inventory、InventoryBatch、User、OperationMetric、Permission。

关键接口草案：

- `GET /api/orders`：订单列表，必须鉴权，支持状态、时间、关键词。
- `GET /api/products`：商品列表，必须鉴权，支持类目、状态、关键词。
- `GET /api/inventory`：库存列表，必须鉴权，支持 SKU、仓库、风险状态。
- `GET /api/inventory/batches`：库存批次列表，必须鉴权，支持 `expiresBefore`、`expiryStatus`、`permissionScope`。
- `PATCH /api/inventory/batches/:id/alert-rule`：更新预警阈值，必须鉴权、幂等、防越权。
- `GET /api/users`：用户列表，必须鉴权和字段级脱敏。
- `GET /api/metrics`：运营数据，必须声明数据口径和时间范围。

错误码至少覆盖：UNAUTHORIZED、FORBIDDEN、VALIDATION_ERROR、NOT_FOUND、CONFLICT、INTERNAL_ERROR。

## 测试边界

- 后端契约测试覆盖鉴权、字段校验、错误码、幂等。
- 前端测试覆盖筛选、分页、详情抽屉、权限禁用态、库存预警状态。
- 浏览器截图覆盖 desktop、mobile、component-detail、state-matrix。

## User confirmation

Status: pending after change 0001

## Confirmed Facts

当前目录没有可实现项目栈；本次压测只验证流程、门禁和固定产物。

## AI Assumptions

后续若进入实现，将使用 React 19+、Tailwind CSS v4、HeroUI React v3，并按项目实际栈调整。

## Open Questions

需要确认实际框架、包管理器、后端协议、数据库、认证系统和部署环境。

## Out of Scope

本次不创建应用、不安装依赖、不写前端或后端实现代码。

## Downstream Use

本文件供 implementation-planner、backend contract audit、HeroUI component graph audit 和 code review gate 使用。

## PASS Condition

项目栈、API、数据、权限、测试和 HeroUI 边界被确认后，才能进入实现计划。
