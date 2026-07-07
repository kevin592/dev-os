# Plugin backups

This directory stores full archive backups of local Codex plugins.

## full-stack-development

- Archive: `full-stack-development-0.1.0+codex.20260707023956.zip`
- Source: `C:\Users\ROOT\.codex\plugins\cache\personal\full-stack-development\0.1.0+codex.20260707023956`
- Contents: full plugin directory, including `node_modules`.

The browsable source-level copy is also committed under:

`plugins/full-stack-development/`

That tree excludes `mcp-server/node_modules`; restore dependencies with:

```bash
cd plugins/full-stack-development/mcp-server
npm ci
```
