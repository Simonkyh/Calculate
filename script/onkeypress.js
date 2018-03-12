document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 49 || evt.keyCode == 97) {
        display('1');
    } else if (evt.keyCode == 50 || evt.keyCode == 98) {
        display('2');
    } else if (evt.keyCode == 51 || evt.keyCode == 99) {
        display('3');
    } else if (evt.keyCode == 52 || evt.keyCode == 100) {
        display('4');
    } else if (evt.keyCode == 53 || evt.keyCode == 101) {
        display('5');
    } else if (evt.keyCode == 54 || evt.keyCode == 102) {
        display('6');
    } else if (evt.keyCode == 55 || evt.keyCode == 103) {
        display('7');
    } else if (evt.keyCode == 56 || evt.keyCode == 104) {
        display('8');
    } else if (evt.keyCode == 57 || evt.keyCode == 105) {
        display('9');
    } else if (evt.keyCode == 48 || evt.keyCode == 96) {
        display('0');
    } else if (evt.keyCode == 188 || evt.keyCode == 110 || evt.keyCode == 190) {
        display('.');
    } else if (evt.keyCode == 13) {
        equal();
    } else if (evt.keyCode == 106 || evt.keyCode == 191) {
        math('*');
    } else if (evt.keyCode == 107 || evt.keyCode == 187) {
        math('+');
    } else if (evt.keyCode == 109 || evt.keyCode == 189) {
        math('-');
    } else if (evt.keyCode == 111 || evt.keyCode == 55) {
        math('/');
    } else if (evt.keyCode == 8) {
        clearlast();
    }
};
