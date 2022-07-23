const { Menu } = require('electron');

const template = [];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
