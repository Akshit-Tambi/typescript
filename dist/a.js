"use strict";
function greet(firstname) {
    console.log("Hello" + firstname);
}
greet("Akshit");
function runafter1sec(fn) {
    setTimeout(fn, 1000);
}
runafter1sec(function () {
    console.log("Hii there after 1 sec");
});
