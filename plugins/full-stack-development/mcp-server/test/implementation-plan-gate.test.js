import assert from "node:assert/strict";
import test from "node:test";

import {
  generateImplementationPlanScaffold,
  reviewImplementationPlan
} from "../src/implementation-plan.js";

test("implementation plan review blocks plans without failing test proof", () => {
  const review = reviewImplementationPlan({
    content: `
# Feature Implementation Plan

**Goal:** Build the feature.

### Task 1: Add contract module

**Files:**
- Create: \`C:/repo/src/contracts.js\`
- Test: \`C:/repo/test/contracts.test.js\`

- [ ] Implement the module.
- [ ] Run: \`npm test\`
`
  });

  assert.equal(review.status, "blocked");
  assert.ok(review.blockers.some((blocker) => blocker.code === "missing-red-test-proof"));
});

test("implementation plan review blocks plans without exact files", () => {
  const review = reviewImplementationPlan({
    content: `
# Feature Implementation Plan

### Task 1: Add checks

**Files:**
- Modify: relevant files

- [ ] **Step 1: Write the failing test**
- [ ] **Step 2: Run test to verify it fails**
Expected: FAIL because implementation is missing.
- [ ] **Step 3: Implement code**
- [ ] **Step 4: Run test to verify it passes**
`
  });

  assert.equal(review.status, "blocked");
  assert.ok(review.blockers.some((blocker) => blocker.code === "missing-exact-files"));
});

test("implementation plan review blocks plans without code review gate", () => {
  const review = reviewImplementationPlan({
    content: `
# Feature Implementation Plan

### Task 1: Add checks

**Files:**
- Create: \`C:/repo/src/checks.js\`
- Test: \`C:/repo/test/checks.test.js\`

- [ ] **Step 1: Write the failing test**
- [ ] **Step 2: Run test to verify it fails**
Expected: FAIL because implementation is missing.
- [ ] **Step 3: Write minimal implementation**
- [ ] **Step 4: Run test to verify it passes**
`
  });

  assert.equal(review.status, "blocked");
  assert.ok(review.blockers.some((blocker) => blocker.code === "missing-code-review-gate"));
});

test("implementation scaffold includes TDD, code review, and completion gate requirements", () => {
  const scaffold = generateImplementationPlanScaffold({
    featureName: "Codex Product Development Plugin",
    files: [
      "C:/repo/mcp-server/src/contracts.js",
      "C:/repo/mcp-server/test/contracts.test.js"
    ],
    constraints: ["Keep existing MCP tools backward compatible."]
  });

  assert.equal(scaffold.status, "pass");
  assert.match(scaffold.content, /Write the failing test/);
  assert.match(scaffold.content, /Expected: FAIL because/);
  assert.match(scaffold.content, /Code Review Gate/);
  assert.match(scaffold.content, /review_completion_gate/);
  assert.equal(reviewImplementationPlan({ content: scaffold.content }).status, "pass");
});

