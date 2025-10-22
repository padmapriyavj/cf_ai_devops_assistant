# cf_ai_devops_assistant

An AI-powered DevOps assistant built using [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/). This app uses the LLaMA 3.3 model deployed at the edge to help developers generate GitHub Actions workflows, debug CI/CD pipelines, and improve infrastructure performance—all through natural language prompts.

---

## Features

- LLM-Powered — Uses Cloudflare Workers AI with LLaMA 3.3.
- DevOps-Focused — Understands pipelines, GitHub Actions, Docker, and CI/CD logs.
- Runs at the Edge — Built using Cloudflare Workers for ultra-fast responses.
- Simple API Interface — Accepts queries via HTTP query parameters.
- Expandable — Memory and logging can be added via KV, Durable Objects, or D1.

---

## Example Prompts

You can ask:

- `generate a github actions workflow for a node.js project with test and deploy`
- `why did my GitHub Actions job fail with exit code 1?`
- `suggest a retry strategy for flaky deployments`
- `optimize Docker layer caching in my CI pipeline`

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/cf_ai_devops_assistant.git
cd cf_ai_devops_assistant
````

### 2. Install Wrangler

```bash
npm install -g wrangler
```

### 3. Create `wrangler.toml` Configuration

Make sure your `wrangler.toml` looks like this:

```toml
name = "cf_ai_devops_assistant"
main = "src/index.ts"
compatibility_date = "2024-01-01"

[ai]
binding = "AI"
```

### 4. Register a workers.dev Subdomain

Go to:
[https://dash.cloudflare.com/workers/onboarding](https://dash.cloudflare.com/workers/onboarding)
Choose a subdomain like:

```
padma-assistant.workers.dev
```

### 5. Run the Worker Locally (Remote Mode)

```bash
wrangler dev
```

Then test in your browser:

```
http://localhost:8787/?q=generate%20a%20github%20actions%20workflow%20for%20node
```

You should receive a JSON response from LLaMA 3.3.

---

## Deployment

When you're ready to go live:

```bash
wrangler publish
```

Your Worker will be available at:

```
https://<your-subdomain>.workers.dev/?q=your%20query
```

---

## Project Structure

```
cf_ai_devops_assistant/
├── src/
│   └── index.ts            # Cloudflare Worker logic with LLM prompt
├── wrangler.toml           # Worker + AI config
├── README.md               # Documentation (this file)
├── PROMPTS.md              # Prompt logs and examples
├── package.json
├── tsconfig.json
```

---

## Roadmap / Ideas

* Add KV-based memory to store user interaction history
* Create a frontend UI using Cloudflare Pages (React or HTML)
* Implement log parsing for CI pipelines
* Auto-generate GitHub Actions YAML with context

---

## License

MIT License © 2025 Padmapriya Vijayaragava Rengaraj

---

## Author

**Padmapriya Vijayaragava Rengaraj**

* Portfolio: [www.padmavijay.com](https://www.padmavijay.com/)
* GitHub: [@padmapriyavj](https://github.com/padmapriyavj)
* LinkedIn: [Padmapriya on LinkedIn](https://www.linkedin.com/in/padmapriya-v-48ab1220a/)


