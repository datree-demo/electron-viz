const { app, BrowserWindow } = require('electron');
   
  let win;
  
  let createWindow = () => { 
    win = new BrowserWindow({ 
        width: 1800, height: 900 
    });
   
    win.loadFile('index.html');
   
    win.webContents.openDevTools();
   
    win.on('closed', () => {
      win = null;
    });
  };
   
  app.on('ready', createWindow);
   
  app.on('window-all-closed', () => { 
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  
  app.on('activate', () => { 
    if (win === null) {
      createWindow();
    }
  });