import { app, BrowserWindow, ipcMain } from 'electron'

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit()
}

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
    autoHideMenuBar: true,
    frame: false,
  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  mainWindow.webContents.openDevTools()
}

app.on('ready', () => {
  createWindow()
  handleIcpRequests()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

const handleIcpRequests = () => {
  ipcMain.handle('close', () => {
    app.quit()
  })

  ipcMain.handle('minimize', () => {
    if (BrowserWindow.getFocusedWindow()?.isMinimized()) {
      BrowserWindow.getFocusedWindow()?.restore()
    } else {
      BrowserWindow.getFocusedWindow()?.minimize()
    }
  })

  ipcMain.handle('maximize', () => {
    if (BrowserWindow.getFocusedWindow()?.isMaximized()) {
      BrowserWindow.getFocusedWindow()?.unmaximize()
    } else {
      BrowserWindow.getFocusedWindow()?.maximize()
    }
  })
}

