.PHONY: build install-deps clean

build: install-deps
	npm run compile

install-deps:
	npm install

clean:
	rm -rf out node_modules bin *.vsix
