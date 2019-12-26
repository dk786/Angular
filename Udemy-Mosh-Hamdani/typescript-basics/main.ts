/**
 * 
 * Note if working with vs code you may get a duplicate funciton error if you 
 * a) the js file is in the same folder and 
 * b) opened at the same time as the parent ts file
 * This is a known bug bug in code and can be resolved by running tsc --init.
 * Just closing the js or ts file will also make the error go away
 * @param num 
 */

function doSomething(num: number) {
    for (let i = 0; i < num; i++){
        console.log(i);
    }
    // i will throw a compilation error but will still compile and run as is transpiled into ES5 where let is defaulted to var
    // console.log("Finally :" + i);
}

doSomething(7);