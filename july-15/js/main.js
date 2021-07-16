"use strict";
var config = {
    "_comment": "this is a test file"
};
var output;
window.onload = function () {
    var numInput = document.getElementById("gNum");
    var result = document.querySelector('#result');
    var ranNumber = (Math === null || Math === void 0 ? void 0 : Math.floor((Math === null || Math === void 0 ? void 0 : Math.random()) * 100)) + 1;
    numInput.onblur = function () {
        var num = Number(numInput.value);
        if (num > ranNumber) {
            output = "<p class=\"bigger\">Guessed number (" + num + ") is Higher. Try something smaller.</p>";
            result.innerHTML += "<p class=\"bigger\">Guessed number (" + num + ") is Higher. Try something smaller.</p>";
        }
        else if (num < ranNumber) {
            result.innerHTML += "<p class=\"smaller\">Guessed number (" + num + ") is Smaller. Try something bigger.</p>";
        }
        else if (num === ranNumber) {
            result.innerHTML += "<p class=\"correct\"> Yep! You guessed (" + num + ") it right.</p>";
        }
        else if (isNaN(num)) {
            result.innerHTML += "<p class=\"error\"> Please input (" + num + ") a valid number.</p>";
        }
    };
};
//# sourceMappingURL=main.js.map