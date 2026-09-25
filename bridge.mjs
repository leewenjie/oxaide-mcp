#!/usr/bin/env node
// Stdio bridge: spawns mcp-remote against the hosted Oxaide MCP server.
// Lets stdio-only clients and directory builders reach https://oxaide.com/mcp.
import { spawn } from 'node:child_process';

const child = spawn('npx', ['-y', 'mcp-remote', 'https://oxaide.com/mcp'], {
  stdio: 'inherit',
});
child.on('exit', (code) => process.exit(code ?? 0));
