// prettier-ignore
/* eslint-disable */
// copilot: disable
//copilot: disable


let empty={};
let point ={
    x:0,
    y:0

};
let p2={
    x: point.x,
    y: point.y+1
};

let book = {
    "main title": "JavaScript Basics", // Key with space, must be in quotes
    "sub-title": "John Doe",           // Another key with space
    for: "all audiences",              // Reserved keyword but allowed as a key in objects
    author: {
        firstName: "John",             // Nested object: author's first name
        lastName: "Doe"                // Nested object: author's last name
    }
};


console.log(empty);
console.log(point);
console.log(p2);
console.log(book);