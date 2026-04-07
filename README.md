# gomib-vscode

SNMP MIB language support for Visual Studio Code, powered by [gomib](https://github.com/golangsnmp/gomib) and [gomib-lsp](https://github.com/golangsnmp/gomib-lsp).

## Features

- Syntax highlighting (TextMate grammar + semantic tokens)
- Diagnostics (errors and warnings from MIB parsing/resolution)
- Hover documentation (type info, status, descriptions)
- Code completion (symbols, keywords, OID children, imports)
- Go to definition
- Find references
- Document symbols and workspace symbols
- Workspace reload on external file changes (git checkout, new files on
  disk, file create/rename/delete from the Explorer)
- Multi-root workspace support

## Configuration

| Setting | Description | Default |
|---------|-------------|---------|
| `mib.server.path` | Path to a custom `mib-lsp` binary | (bundled) |

## File Types

The extension activates for files with these extensions: `.mib`, `.my`, `.smi`.

## License

MIT
