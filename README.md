# Oxaide MCP — connector package

Stdio bridge to the hosted Oxaide MCP server at `https://oxaide.com/mcp`.

Oxaide is a private research desk for Singapore owners, purchasable by AI
agents over MCP. Your agent asks a question (counterparty check, ACRA/URA/
GeBIZ pack, grant screen), pays per job with Stripe or USDC on Base, and
collects a source-linked pack in ~2h. No account, no API key. Full refund if
a key claim is unbacked. Research, not advice; SG-only public sources.

- Endpoint: `https://oxaide.com/mcp`
- Server card: `https://oxaide.com/mcp/server-card`
- Catalog: `https://oxaide.com/.well-known/ai-catalog.json`
- Human guide: `https://oxaide.com/agents`
- Pricing: S$49 Quick / S$390 Pack / S$1500 Desk per job
- Support: hi@oxaide.com

## Use

```json
{ "mcpServers": { "oxaide": { "url": "https://oxaide.com/mcp" } } }
```

Stdio clients: `npx -y @leewenjie/oxaide-mcp`

<!-- mcp-name: io.github.leewenjie/oxaide -->
