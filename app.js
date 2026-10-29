// console.log("Start");

// const { useCallback } = require("react");

// setTimeout( () => {
//     console.log("First callback"),2000
// },3000);


// for(i=0; i<=5000; i++) {

//     console.log(i);
// }

// setTimeout( ()=> {
//     console.log("Second callback")
// },1000);


function primarySection(useCallback) {
    useCallback("Primary Section");
}

function secondarySection(useCallback) {
    // if(false) {
useCallback("Secondary Sectioin");
    // } else {
    //     console.log("give crt one");
    // }
    
}

function degree(useCallback) {
    useCallback("Degree Qualified");
}

primarySection((res1)=> {
    console.log(res1);
    secondarySection((res2)=> {
    console.log(res2);
    degree((res3)=> {
    console.log(res3);


});
    });
});
