const electron = require('electron');
const {app, BrowserWindow} = electron;


app.on('ready', () => {
    console.log("App is ready");
    const mainWindow= new BrowserWindow({
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});