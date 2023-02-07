var a = 1;

function b() {
    a = 10;
    return;
    function a() {
    //   console.log("me know");
    }
}

b();
console.log(a);