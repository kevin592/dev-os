# 电商管理后台 - 视觉需求

## 视觉方向

这是内部运营工具，应保持高密度、安静、可扫描。首屏就是后台工作台，不做营销式落地页。避免大 hero、装饰性渐变、单一紫蓝主题和卡片套卡片。

## HeroUI 视觉约束

- 使用 HeroUI v3 官方组件作为默认视觉和交互基础。
- 使用 HeroUI semantic tokens 和 theme variables 表达状态，不以原始 Tailwind 色板堆叠视觉。
- 表格、抽屉、模态框、按钮、选择器、日期范围、徽标、提示、分页、骨架屏等不手写替代。
- Tailwind v4 只用于布局、间距、响应式和溢出约束。

## 布局与密度

- 桌面：左侧导航、顶部工具栏、内容区表格和 KPI 摘要。
- 移动：导航折叠为 Drawer，筛选以可折叠区域或 Modal 呈现。
- 表格最小宽度需稳定，横向溢出用 ScrollContainer。
- 按钮、标签、状态文案不得挤压或重叠。

## Tokens / spacing / typography

- 使用 HeroUI 默认 radius、surface、foreground、warning、danger、success。
- 栅格和列表间距以 `gap-*` 为主，不使用 `space-x-*` / `space-y-*`。
- 字体不随 viewport width 线性缩放，标题层级贴合后台密度。

## User confirmation

Status: pending

## Confirmed Facts

前端视觉必须进入 HeroUI React v3 体系，并在实现前经过 Pencil/Figma 图片确认。

## AI Assumptions

后台视觉应安静、高密度、可扫描，使用 HeroUI semantic tokens 表达状态。

## Open Questions

需要确认是否有品牌色、暗色模式、国际化或企业设计系统约束。

## Out of Scope

不做营销式首页、装饰性大图、渐变背景和非后台工作流页面。

## Downstream Use

本文件供 visual-design-orchestrator、HeroUI component graph audit 和视觉验收使用。

## PASS Condition

视觉密度、tokens、响应式、禁止项和四类视觉导出要求被确认后，可进入设计工具。
