const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
const postgres = require("./database");
const { error } = require("console");

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

  ipcMain.handle("videos:getVideos", async () => {
    const videos = await postgres.queryVideos();
    return {
      success: true,
      data: videos,
    };
  });

  ipcMain.handle("articles:getArticles", async () => {
    const articles = await postgres.queryArticles();
    return {
      success: true,
      data: articles,
    };
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on("botao-clicado", async () => {
  console.log("O botão foi clicado!");
  const commen = new BrowserWindow({
    width: 400,
    height: 300,
  });
  commen.loadFile("comment.html");
});
