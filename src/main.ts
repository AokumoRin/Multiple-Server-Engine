// src/main.ts

// 모듈 선언
import { app, BrowserWindow } from "electron";
import * as path from "path";

const createMainWindow = () => {
    const win: BrowserWindow | null = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile(path.join(__dirname, "renderer", "index.html"));

    win.webContents.openDevTools();
}

app.whenReady().then(() => {

    createMainWindow();

    if(process.platform === "darwin") {
        app.on("activate", () => {
            if(BrowserWindow.getAllWindows().length === 0) createMainWindow();
        });
    }
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") app.quit();
});