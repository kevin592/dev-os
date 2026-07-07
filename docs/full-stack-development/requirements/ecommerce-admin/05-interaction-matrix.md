# 电商管理后台 - 交互矩阵需求

| 区域 | 触发 | 行为 | 反馈 | 权限 |
| --- | --- | --- | --- | --- |
| 全局搜索 | 输入关键词并回车 | 搜索订单号、SKU、用户 ID | 表格刷新，显示筛选摘要 | 所有登录角色 |
| 时间范围 | 选择日期范围 | 更新订单和运营数据 | 显示加载态和刷新时间 | 运营、管理员 |
| 订单行 | 点击行或查看按钮 | 打开详情抽屉 | Drawer 展示订单明细 | 运营、客服、管理员 |
| 商品编辑 | 点击编辑 | 打开编辑 Modal 或 Drawer | 保存成功 Toast，失败 Alert | 运营、管理员 |
| 库存批次 | 点击批次预警 | 打开批次明细 Drawer | 展示临期/过期批次和阈值 | 仓储、管理员 |
| 库存预警筛选 | 选择正常/临期/过期 | 过滤库存批次 | Table 更新，Pagination 复位 | 仓储、管理员 |
| 权限受限动作 | 点击禁用按钮或查看 Tooltip | 显示原因 | Tooltip/Alert 提示需要权限 | 无权限角色 |
| 分页 | 切换页码 | 请求新页数据 | 保持筛选条件，显示 Skeleton | 所有可访问角色 |

## 键盘和无障碍

- 表格行操作必须可键盘聚焦。
- 抽屉和模态框必须有焦点管理、Esc 关闭策略和明确标题。
- 图标按钮必须有 `aria-label` 或可访问名称。
- 权限拒绝必须有文本反馈，不只依赖颜色。

## HeroUI candidates

Table、Drawer、Modal、Button、Select、DateRangePicker、Badge、Chip、Tabs、Toolbar、Tooltip、Toast、Alert、Pagination、Skeleton、Card、Surface、Typography。

## User confirmation

Status: pending after change 0001

## Confirmed Facts

主要交互包括搜索、筛选、表格行详情、商品编辑、库存批次预警、权限反馈和分页。

## AI Assumptions

详情和编辑优先使用 Drawer/Modal，不在表格中展开复杂编辑表单。

## Open Questions

需要确认批次预警配置入口是否对仓储开放，客服是否可查看用户完整敏感字段。

## Out of Scope

不包含批量导入导出、复杂工作流审批和跨系统同步操作。

## Downstream Use

本文件供 HeroUI 组件选择、状态矩阵、视觉细节板和前端事件实现使用。

## PASS Condition

每个主要动作都有触发、结果、反馈、权限和键盘/无障碍说明后，可进入视觉设计。
