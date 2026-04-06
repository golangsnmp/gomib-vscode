.PHONY: build install-deps package clean

build: install-deps
	npm run compile

install-deps:
	npm install

# Package a universal VSIX (no bundled binary).
package: build
	npx @vscode/vsce package -o gomib-universal.vsix

clean:
	rm -rf out node_modules bin *.vsix
