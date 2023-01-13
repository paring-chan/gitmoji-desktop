import { app, shell, BrowserWindow, Tray, NativeImage, nativeImage, Menu } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon16 from '../../resources/icon_16.png?asset'
import icon from '../../resources/icon.png?asset'
import isDev from 'electron-is-dev'
import positioner from 'electron-traywindow-positioner'

if (!app.requestSingleInstanceLock()) {
  app.quit()
}

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 600,
    show: false,
    autoHideMenuBar: true,
    frame: false,
    fullscreenable: false,
    resizable: false,
    alwaysOnTop: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      devTools: isDev
    }
  })

  mainWindow.on('blur', () => {
    mainWindow.hide()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  mainWindow.on('ready-to-show', () => {
    if (!tray) {
      tray = new Tray(getTrayIcon())

      app.on('second-instance', () => {
        positioner.position(mainWindow, tray.getBounds())

        mainWindow.show()
        mainWindow.focus()
      })

      const contextMenu = Menu.buildFromTemplate([
        {
          label: app.getName(),
          click: (): void => {
            positioner.position(mainWindow, tray.getBounds())

            mainWindow.show()
            mainWindow.focus()
          }
        },
        {
          id: 'quit',
          label: 'Quit',
          accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
          click: (): void => {
            app.quit()
          }
        }
      ])

      tray.on('click', () => {
        positioner.position(mainWindow, tray.getBounds())

        mainWindow.show()
        mainWindow.focus()
      })

      tray.on('right-click', () => {
        tray.popUpContextMenu()
      })

      tray.on('balloon-click', () => {
        console.log('balloon click')
      })

      tray.setToolTip(app.name)
      tray.setContextMenu(contextMenu)
    }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

let tray: Tray = null!

const getTrayIcon = (): NativeImage | string => {
  return nativeImage.createFromPath(icon16)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('dev.pikokr')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  app.quit()
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
