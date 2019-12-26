function doSomething(num) {
    for (var i = 0; i < num; i++) {
        console.log(i);
    }
    // i will throw a compilation error but will still compile and run as is transpiled into ES5 where let is defaulted to var
    // console.log("Finally :" + i);
}
doSomething(7);
