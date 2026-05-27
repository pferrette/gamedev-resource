const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 280,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  win.loadFile("index.html");
  win.webContents.openDevTools();

  const menu = Menu.buildFromTemplate([
    {
      label: "Editar",
      submenu: [{ role: "copy" }, { role: "paste" }],
    },
  ]);
  win.setMenu(menu);
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on("botao-clicado", () => {
  console.log("O botão foi clicado!");
  const commen = new BrowserWindow({
    width: 400,
    height: 300,
  });
  commen.loadFile("comment.html");
});
