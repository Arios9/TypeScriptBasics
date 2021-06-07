"use strict";
var sports = ["basket", "tennis", "volley", "chess"];
//arrays in ts are dynamic
sports.push("football");
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    console.log(sport);
}
sports.forEach(function (s) { return console.log(s); });
