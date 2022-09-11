const main = () => document.getElementById("main") as HTMLDivElement;

function setCaret(line: number, char: number): void {
    var el = document.getElementById("main") as HTMLDivElement;
    var range = document.createRange()
    var sel = window.getSelection() as Selection;
    
    range.setStart(el.childNodes[2], 5)
    range.collapse(true)
    
    sel.removeAllRanges()
    sel.addRange(range)
}

function StartGame() {
    main().setAttribute("contenteditable", "false");
    main().innerHTML = "<h1>Type Fighters!</h1><a href=\"#\" menufirst>Start</a><br><a menusettings href=\"#\">Settings</a>";
}

StartGame()