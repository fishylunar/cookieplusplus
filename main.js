var app = require('app');
var BrowserWindow = require('browser-window');
var mainWindow = null;
app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});
app.on('ready', function() {
    // Create the browser window.
    mainWindow= new BrowserWindow({
 width: 1280, 
 height: 720,
 icon: __dirname + '/src/img/favicon.ico'
})
//Remove the menu
mainWindow.setMenuBarVisibility(false)
    mainWindow.loadURL(__dirname + '/src/index.html');
mainWindow.webContents.on('dom-ready', function(e) {
mainWindow.webContents.executeJavaScript('console.log("Oh hi there")')
})
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});