"use strict";
const main = () => document.getElementById("main");
function setCaret(line, char) {
    var el = document.getElementById("main");
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(el.childNodes[2], 5);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
}
function StartGame() {
    main().setAttribute("contenteditable", "false");
    main().innerHTML = "<h1>Type Fighters!</h1><a href=\"#\" menufirst>Start</a><br><a menusettings href=\"#\">Settings</a>";
}
StartGame();
