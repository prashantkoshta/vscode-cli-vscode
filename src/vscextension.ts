'use strict';
import * as vscode from 'vscode'


export function activate(context: vscode.ExtensionContext) {
    let terminal:vscode.Terminal = vscode.window.createTerminal("");
    terminal.show(true);

    vscode.commands.registerCommand('vscextension.help', () => {
        terminal.sendText("vsce --help");
    });

    vscode.commands.registerCommand('vscextension.ls', () => {
        terminal.sendText("vsce ls");
    });

    vscode.commands.registerCommand('vscextension.createPublisher', () => {
        vscode.window.showInputBox({ placeHolder: 'Enter publisher name'}).then(
            (data) => {
                    terminal.sendText("vsce create-publisher "+data);
                }
        )  
    });

    vscode.commands.registerCommand('vscextension.deletePublisher', () => {
        vscode.window.showInputBox({ placeHolder: 'Enter publisher name'}).then(
            (data) => {
                    terminal.sendText("vsce delete-publisher "+data);
                }
        )  
    });

    vscode.commands.registerCommand('vscextension.login', () => {
        vscode.window.showInputBox({ placeHolder: 'Enter publisher name'}).then(
            (data) => {
                    terminal.sendText("vsce login "+data);
                }
        )  
    });

    vscode.commands.registerCommand('vscextension.logout', () => {
        vscode.window.showInputBox({ placeHolder: 'Enter publisher name'}).then(
            (data) => {
                    terminal.sendText("vsce logout "+data);
                }
        )  
    });

    vscode.commands.registerCommand('vscextension.publish', () => {
        vscode.window.showQuickPick([
            "-p",
            "major",
            "minor",
            "patch",
            ]).then(
            (data) => {
                    if(data === "-p"){
                        vscode.window.showInputBox({ placeHolder: 'Enter your token'}).then(
                            (data) => {
                                    terminal.sendText("vsce publish -p  "+data);
                            }
                        );
                    }else{
                        terminal.sendText("ng build "+data);
                    }
            }
        )
    });

    vscode.commands.registerCommand('vscextension.list', () => {
        vscode.window.showInputBox({ placeHolder: 'Enter publisher name'}).then(
            (data) => {
                    terminal.sendText("vsce list "+data);
                }
        )  
    });

    vscode.commands.registerCommand('vscextension.ls-publishers', () => {
        terminal.sendText("vsce ls-publishers ");
    });


}

// this method is called when your extension is deactivated
export function deactivate() {
    
}



/*
ls                                   Lists all the files that will be published
    package [options]                    Packages an extension
    publish [options] [<version>]        Publishes an extension
    unpublish [options] [<extensionid>]  Unpublishes an extension. Example extension id: microsoft.cshar
p.
    list <publisher>                     Lists all extensions published by the given publisher
    ls-publishers                        List all known publishers
    create-publisher <publisher>         Creates a new publisher
    delete-publisher <publisher>         Deletes a publisher
    login <publisher>                    Add a publisher to the known publishers list
    logout <publisher>                   Remove a publisher from the known publishers list
    *
*/