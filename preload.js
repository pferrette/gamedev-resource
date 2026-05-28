const { contextBridge, ipcRenderer, shell } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  openFile: () => ipcRenderer.invoke("dialog:openFile"),
  // openExternal: (url) => shell.openExternal(url),
  botaoClicado: () => ipcRenderer.send("botao-clicado"),
  getVideos: () => ipcRenderer.invoke("videos:getVideos"),
  getArticles: () => ipcRenderer.invoke("articles:getArticles"),
});
