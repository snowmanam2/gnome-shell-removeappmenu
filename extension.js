
const Main = imports.ui.main;

let restoreState = {};

function init() {
}

function enable() {
    restoreState["applicationMenu"] = Main.panel._appMenu.actor;
    Main.panel._leftBox.remove_actor(restoreState["applicationMenu"]); 
}

function disable() {
    Main.panel._leftBox.add(restoreState["applicationMenu"]);  
}
