# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0] - 2026-04-07

### Added

- Bundles mib-lsp v0.2.0, which enables several capabilities transparently
  through vscode-languageclient:
  - File watching: external edits, git checkout, and new MIB files on disk
    refresh diagnostics without needing a save in the open editor.
  - Multi-root workspaces: adding or removing folders in a workspace now
    triggers a server-side reload.
  - File operations: creating, renaming, or deleting MIB files from the VS
    Code Explorer triggers a reload.

## [0.2.4] - 2026-04-07

### Changed

- Rebuilt against mib-lsp v0.1.1.

## [0.2.3] - 2026-04-07

### Fixed

- Picks up the mib-lsp v0.1.1 Windows URI/path fix so workspaces opened with
  drive-letter URIs load MIBs and publish diagnostics correctly.

## [0.2.2] - 2026-04-07

### Fixed

- Bundle runtime dependencies in the packaged VSIX.

## [0.2.1] - 2026-04-07

### Changed

- Set `displayName` to `gomib-vscode`.
- Publisher restored to the `golangsnmp` namespace.

## [0.2.0] - 2026-04-07

### Added

- Release workflow with per-platform VSIX packaging.
- OpenVSX publishing.

## [0.1.0] - 2026-04-06

Initial release.

[Unreleased]: https://github.com/golangsnmp/gomib-vscode/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/golangsnmp/gomib-vscode/compare/v0.2.4...v0.3.0
[0.2.4]: https://github.com/golangsnmp/gomib-vscode/compare/v0.2.3...v0.2.4
[0.2.3]: https://github.com/golangsnmp/gomib-vscode/compare/v0.2.2...v0.2.3
[0.2.2]: https://github.com/golangsnmp/gomib-vscode/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/golangsnmp/gomib-vscode/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/golangsnmp/gomib-vscode/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/golangsnmp/gomib-vscode/releases/tag/v0.1.0
