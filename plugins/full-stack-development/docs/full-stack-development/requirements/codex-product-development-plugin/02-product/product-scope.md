# 产品范围: 全流程 Codex 通用产品开发插件

## P0 Scope

P0 必须让插件具备可运行的全流程核心:

- Artifact Registry: 每个产物有 producer、consumer、PASS 条件、失败回退。
- Stage Gate: 需求、产品、IA/交互/状态、后端/API/前端合同、视觉、实现、验证、发布阶段可被阻断和放行。
- Requirement Clarification Pressure Tests: 测试 agent 能从粗需求起草结构，不无限澄清，不跳过关键信息。
- Change Control: 需求变更可生成 change record、影响分析、artifact stale、审批失效、阶段回退。
- HeroUI Frontend Gate: UI 项目必须读官方 HeroUI 资料、先出 Pencil/Figma 图、用户确认后才能实现，且禁止手写官方已有组件。
- Completion Gate: 完成声明前必须有测试、构建、截图、审查、验收证据。
- Installed Cache Regression: 源码和安装缓存都要通过测试。

## P1 Scope

- Skill 拆分为需求、产品、IA、交互状态、后端合同、API 合同、视觉、HeroUI、水合、实施计划、代码审查、完成验证等子 Skill。
- 实现实施计划 scaffold，吸收 Superpowers 的 writing-plans、TDD、verification-before-completion 纪律。
- 增加示例 fixture: 电商后台、纯后端 API、无 UI CLI、小白粗需求、需求中途变更、用户要求跳步。

## P2 Scope

- 引入 case/lessons 自进化沉淀。
- 引入子代理执行模板和 reviewer 模板。
- 引入更强的 AST 级前端检测。
- 引入可视化报告或 dashboard。

## Non-Goals

- 不复制 Superpowers 全部实现。
- 不复制 PM5.0 的所有人格化表达。
- 不把流程变成只能做前端。
- 不让文档数量本身成为目标；文档必须服务下游执行和 gate。

## Acceptance Path

1. 用一句粗需求生成完整工作台。
2. 用缺失关键 artifact 的 fixture 证明 gate 会阻断。
3. 用过度澄清 fixture 证明 agent 必须先起草并最多问少量聚焦问题。
4. 用需求变更 fixture 证明下游 artifact 会 stale，阶段会回退。
5. 用 HeroUI 违规代码 fixture 证明手写 UI 和 shadcn/Radix/Base UI/CVA 会阻断。
6. 用完成前缺证据 fixture 证明不能进入 `verified`。
7. 源码测试和安装缓存测试都通过。

## PASS Condition

- P0 范围足以交给实施计划阶段，每个目标都有测试或压力测试对应。

## Failure Route

- 如果 P0 混入过多 P1/P2，回退到 `product-scope-builder`。

