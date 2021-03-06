'use strict';
import * as vscode from 'vscode';

/**
 * Create a status bar item.
 * @param {number} priority The higher the priority, the more left the icon will be.
 * @param {string} commandName The function that will be triggered when the user click the button.
 * @param {string} iconText The shape and text of the button.
 * @param {string} tooltip The description when hovering the button.
 * @return {vscode.StatusBarItem}
 */
export function createStatusBarItem(priority: number, commandName: string, iconText: string, tooltip: string, alignment: vscode.StatusBarAlignment = vscode.StatusBarAlignment.Left): vscode.StatusBarItem {
    const item = vscode.window.createStatusBarItem(alignment, priority);
    item.command = commandName;
    item.text = iconText;
    item.tooltip = tooltip;
    item.show();
    return item;
}