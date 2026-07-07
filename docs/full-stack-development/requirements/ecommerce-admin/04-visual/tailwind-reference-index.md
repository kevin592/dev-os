# TailwindUI v4.1 reference index

## Source

`D:\BaiduNetdiskDownload\TailwindUI 持续更新\tailwindui plus 20250831\tailwindui plus 20250831\v4.1`

## MCP inspection result

`inspect_tailwind_ui_reference` 返回 pass。识别到 top-level dirs：`catalyst-ui-kit`、`html`、`preview`、`react`、`TEMPLATES`、`vue`。

## Policy

- referenceOnly: true
- doNotBundleTailwindUiSource: true
- doNotCopyTemplateCodeIntoPlugin: true
- allowedUse: 仅作 IA、布局密度、响应式模式和视觉参考。

## Adoption plan

- 表格模式参考电商列表密度，但实现用 HeroUI Table。
- 抽屉和详情模式参考后台交互节奏，但实现用 HeroUI Drawer/Modal。
- 筛选、日期范围、分页和状态标签全部映射到 HeroUI 官方组件。
- Catalyst、Headless UI、TailwindUI primitive 不进入实现。
