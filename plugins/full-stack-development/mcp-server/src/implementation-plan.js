function blocker(code, reason, artifact = "05-implementation/implementation-plan.md") {
  return {
    severity: "blocker",
    code,
    artifact,
    reason,
    requiredFix: reason,
    failureRoute: "implementation-planner"
  };
}

function hasExactFilePaths(content) {
  const fileLines = String(content)
    .split(/\r?\n/)
    .filter((line) => /^\s*-\s*(Create|Modify|Test):/i.test(line));

  return (
    fileLines.length > 0 &&
    fileLines.every((line) => /`(?:[A-Za-z]:\/|\/|\.\/|[A-Za-z0-9_.-]+\/)[^`]+`/.test(line)) &&
    !fileLines.some((line) => /relevant files|appropriate files|tbd|todo|fill in/i.test(line))
  );
}

export function reviewImplementationPlan(input = {}) {
  const content = String(input.content ?? "");
  const blockers = [];

  if (!/Write the failing test/i.test(content) || !/Run test to verify it fails/i.test(content) || !/Expected:\s*FAIL because/i.test(content)) {
    blockers.push(
      blocker(
        "missing-red-test-proof",
        "Implementation plan must include a failing test step, a command to verify it fails, and the expected failure reason."
      )
    );
  }

  if (!hasExactFilePaths(content)) {
    blockers.push(
      blocker(
        "missing-exact-files",
        "Implementation plan must name exact files in `Create`, `Modify`, or `Test` lines."
      )
    );
  }

  if (!/Code Review Gate/i.test(content) || !/(code-review|reviewer|review report)/i.test(content)) {
    blockers.push(
      blocker(
        "missing-code-review-gate",
        "Implementation plan must include a Code Review Gate and require a review report before completion."
      )
    );
  }

  if (!/review_completion_gate/i.test(content)) {
    blockers.push(
      blocker(
        "missing-completion-gate",
        "Implementation plan must call review_completion_gate before any verified or complete claim."
      )
    );
  }

  return {
    status: blockers.length > 0 ? "blocked" : "pass",
    blockers
  };
}

export function generateImplementationPlanScaffold(input = {}) {
  const featureName = input.featureName ?? "Full-Stack Feature";
  const [implementationFile = "C:/repo/src/feature.js", testFile = "C:/repo/test/feature.test.js"] =
    input.files ?? [];
  const constraints = input.constraints?.length
    ? input.constraints.map((constraint) => `- ${constraint}`).join("\n")
    : "- Preserve existing behavior unless the requirement contract says otherwise.";

  const content = `# ${featureName} Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: use TDD. Steps use checkbox syntax for tracking.

**Goal:** Implement ${featureName} according to the approved artifact contracts.

**Architecture:** Keep implementation units small, deterministic, and reviewable. Each task must produce independently testable behavior.

**Tech Stack:** Project-local stack.

## Global Constraints

${constraints}

---

### Task 1: Contracted Implementation Slice

**Files:**
- Create: \`${implementationFile}\`
- Test: \`${testFile}\`

**Interfaces:**
- Consumes: approved Artifact Registry, Stage Gate report, and requirement contracts.
- Produces: tested implementation and review evidence.

- [ ] **Step 1: Write the failing test**

\`\`\`javascript
test("implements the contracted behavior", () => {
  assert.equal(runContractedBehavior(), "expected");
});
\`\`\`

- [ ] **Step 2: Run test to verify it fails**

Run: \`npm test -- ${testFile}\`
Expected: FAIL because implementation is missing.

- [ ] **Step 3: Write minimal implementation**

Implement only the behavior required by the approved contract.

- [ ] **Step 4: Run test to verify it passes**

Run: \`npm test -- ${testFile}\`
Expected: PASS.

## Code Review Gate

- [ ] Produce a code-review report.
- [ ] Fix all blocking review findings.
- [ ] Record the review report in the feature verification workspace.

## Completion Gate

- [ ] Call \`review_completion_gate\`.
- [ ] Do not claim verified until tests, build, screenshots when UI applies, code review, and final acceptance evidence pass.
`;

  return {
    status: "pass",
    featureName,
    content
  };
}

