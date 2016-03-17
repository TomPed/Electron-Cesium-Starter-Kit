var app = require('app');
var BrowserWindow = require('browser-window')

app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width : 1100, height : 820, resizable : false
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html')
});

