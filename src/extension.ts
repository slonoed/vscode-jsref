'use strict';

import { ExtensionContext } from 'vscode';
import { LanguageClient } from 'vscode-languageclient';

let client: LanguageClient;

export function activate(_context: ExtensionContext) {

	client = new LanguageClient('jsref-language-server', 'Jsref Language Server',
		{
			command: 'jsref',
			args: ['--stdio', '--debug'],
		},
		{
			documentSelector: ['javascript']
		});

	client.start();
}

export function deactivate(): Thenable<void> {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
