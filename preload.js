const { contextBridge, ipcRenderer, shell } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  openFile: () => ipcRenderer.invoke("dialog:openFile"),
  // openExternal: (url) => shell.openExternal(url),
  botaoClicado: () => ipcRenderer.send("botao-clicado"),
});

// contextBridge.exposeInMainWorld("electronAPI", {
//   openExternal: (url) => shell.openExternal(url),
// });
