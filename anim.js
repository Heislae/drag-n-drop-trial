var element = document.getElementById("mydiv");

//Make the DIV element draggagle:
dragElement(element);
setInterval(() => {
    changeBgColor(element);
}, 1);

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
    var offSets = elmnt.getBoundingClientRect();
    var left = offSets.left;
    console.log(left);

    if (left < 700) {
        document.body.style.backgroundColor = "#AA00AA";
    } else if (left > 700) {
        document.body.style.backgroundColor = "#FFFFFF";
    }
}