# symphony-e2e

端到端验证 [OpenAI Symphony](https://github.com/openai/symphony) 的最小仓库。

Symphony 只轮询本仓库中同时满足下面条件的 issue：

- 状态为 `open`
- 带有 `agent-ready` 标签

被派发的 issue 会在独立 workspace 中由 Codex 实现，跑 `npm test` 验证，然后推分支、开 PR、关闭 issue。

## 检查

```bash
npm test
```

要求 Node >= 22（使用内置的 `node --test`）。
