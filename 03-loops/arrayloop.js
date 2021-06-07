"use strict";
var reviews = [2, 6, 3, 7];
var sum = 0;
for (var i = 0; i < reviews.length; i++) {
    sum += reviews[i];
}
console.log(sum);
if (sum > 10) {
    console.log("good job");
}
else {
    console.log("bad job");
}
