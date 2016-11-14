const matchAll = require("../lib");

var s = "Hello _World_ and _Mars_";
console.log(matchAll(s, /_([a-z]+)_/gi).toArray());
// => [ "World", "Mars" ]

// Get matches one by one
var m = matchAll(s, /_([a-z]+)_/gi);
console.log(m.next());
// => "World"

console.log(m.next());
// => "Mars"

console.log(m.next());
// => null

var multipleGroup = "Hello _World001_ and _World002_";
console.log(matchAll(multipleGroup, /_([a-z]+([0-9]+))_/gi).toArray());
// => [ "World", "Mars" ]

// Get matches one by one
var multipleMatch = matchAll(multipleGroup, /_([a-z]+([0-9]+))_/gi);
console.log(multipleMatch.nextRaw());
// => [..., "World001", "001"]

console.log(multipleMatch.nextRaw());
// => [..., "World002", "002"]

var m2 = matchAll("Hello _World_, _Mars_, _Pluto_ and _Moon_!", /_([a-z]+)_/gi);
console.log(m2.next());
// => "World"

// Reset the match index
m2.reset();

console.log(m2.next());
// => "World"

console.log(m2.next());
// => "Mars"

// Set the match index to 20
m2.reset(20);

console.log(m2.next());
// => "Pluto"
