//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));
changeBgColor(element);

var element = document.getElementById(mydiv);

function dragElement(elmnt) {
    var pos1 = 0, pos3 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.pageX;
        pos4 = e.pageY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.pageX;

        pos3 = e.pageX;

        // set the element's new position:

        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }

}

function changeBgColor(elmnt) {
    var leftOffset = elmnt.style.left;
    console.log("leftOffset");
    // if (leftOffset < 700) {
    //     document.body.style.backgroundColor = "#123456";
    // }
}