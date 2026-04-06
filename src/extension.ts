import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
} from "vscode-languageclient/node";

let client: LanguageClient | undefined;
let outputChannel: vscode.OutputChannel;

export function activate(context: vscode.ExtensionContext) {
  outputChannel = vscode.window.createOutputChannel("MIB Language Server");

  const serverPath = getServerPath(context);
  if (!serverPath) {
    outputChannel.appendLine("mib-lsp binary not found");
    vscode.window.showErrorMessage(
      "MIB language server (mib-lsp) not found. Install a platform-specific build or set mib.server.path in settings."
    );
    return;
  }

  outputChannel.appendLine(`Starting mib-lsp: ${serverPath}`);

  const serverOptions: ServerOptions = {
    command: serverPath,
    args: [],
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "mib" }],
    outputChannel,
  };

  client = new LanguageClient(
    "mib-lsp",
    "MIB Language Server",
    serverOptions,
    clientOptions
  );

  client.start();
}

export async function deactivate(): Promise<void> {
  if (client) {
    await client.stop();
  }
}

function getServerPath(
  context: vscode.ExtensionContext
): string | undefined {
  // 1. User-configured path.
  const config = vscode.workspace.getConfiguration("mib");
  const configPath = config.get<string>("server.path");
  if (configPath && fs.existsSync(configPath)) {
    return configPath;
  }

  // 2. Bundled binary (platform-specific VSIX).
  const suffix = process.platform === "win32" ? ".exe" : "";
  const bundledPath = path.join(context.extensionPath, "bin", `mib-lsp${suffix}`);
  if (fs.existsSync(bundledPath)) {
    if (process.platform !== "win32") {
      fs.chmodSync(bundledPath, 0o755);
    }
    return bundledPath;
  }

  // 3. Development path (gomib-lsp sibling directory).
  const devPath = path.join(context.extensionPath, "..", "gomib-lsp", "mib-lsp");
  if (fs.existsSync(devPath)) {
    return devPath;
  }

  // 4. mib-lsp on PATH.
  return undefined;
}
