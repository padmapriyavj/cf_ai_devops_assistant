# cf_ai_devops_assistant

An AI-powered DevOps assistant built using [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/). This app leverages the LLaMA 3.3 model deployed on the edge to help developers generate GitHub Actions workflows, debug CI/CD issues, and get infrastructure optimization advice — all via natural language prompts.

---

## Features

- LLM-Powered — Uses Cloudflare Workers AI with LLaMA 3.3.
- DevOps Expertise — Understands CI/CD pipelines, GitHub Actions, Docker, and more.
- Runs at the Edge — Built with Cloudflare Workers, designed for speed and scale.
- Natural Language API — Accepts user queries via simple HTTP `q=` parameter.
- Prompt Memory Ready — Easy to expand with KV or Durable Objects.

---

## Example Prompts

You can ask things like:

- `generate a github actions workflow for a node.js monorepo`
- `why did my CI pipeline fail with exit code 137?`
- `how do I optimize a Docker build in GitHub Actions?`
- `suggest retry logic for a flaky deployment job`

---

## Getting Started

### 1. Clone this Repository

```bash
git clone https://github.com/YOUR_USERNAME/cf_ai_devops_assistant.git
cd cf_ai_devops_assistant
