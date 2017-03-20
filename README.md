
# match-all

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/match-all.svg)](https://www.npmjs.com/package/match-all) [![Downloads](https://img.shields.io/npm/dt/match-all.svg)](https://www.npmjs.com/package/match-all)

> Get all the matches for a regular expression in a string.

## :cloud: Installation

```sh
$ npm i --save match-all
```


## :clipboard: Example



```js
const matchAll = require("match-all");

let s = "Hello _World_ and _Mars_";
console.log(matchAll(s, /_([a-z]+)_/gi).toArray());
// => [ "World", "Mars" ]

// Get matches one by one
let m = matchAll(s, /_([a-z]+)_/gi);
console.log(m.next());
// => "World"

console.log(m.next());
// => "Mars"

console.log(m.next());
// => null

let multipleGroup = "Hello _World001_ and _World002_";
console.log(matchAll(multipleGroup, /_([a-z]+([0-9]+))_/gi).toArray());
// => [ "World", "Mars" ]

// Get matches one by one
let multipleMatch = matchAll(multipleGroup, /_([a-z]+([0-9]+))_/gi);
console.log(multipleMatch.nextRaw());
// => [..., "World001", "001"]

console.log(multipleMatch.nextRaw());
// => [..., "World002", "002"]

let m2 = matchAll("Hello _World_, _Mars_, _Pluto_ and _Moon_!", /_([a-z]+)_/gi);
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
```

## :memo: Documentation


### `matchAll(s, r)`
Get all the matches for a regular expression in a string.

#### Params
- **String** `s`: The input string.
- **RegExp** `r`: The regular expression.

#### Return
- **Object** An object containing the following fields:
 - `input` (String): The input string.
 - `regex` (RegExp): The regular expression.
 - `next` (Function): Get the next match.
 - `toArray` (Function): Get all the matches.
 - `reset` (Function): Reset the index.

### `next()`
Get the next match in single group match.

#### Return
- **String** The matched snippet.

### `nextRaw()`
Get the next match in raw regex output. Usefull to get another group match.

#### Return
- **Array** The matched snippet

### `toArray()`
Get all the matches.

#### Return
- **Array** The matched snippets.

### `reset(i)`
Reset the index.

#### Params
- **Number** `i`: The new index (default: `0`).

#### Return
- **Number** The new index.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`emojer`](https://github.com/IonicaBizau/emojer#readme)—Emojify all the things.
 - [`rucksack`](https://github.com/IonicaBizau/rucksack-new#readme)—JavaScript and CSS bundler.
 - [`text-testing-mocha`](https://github.com/azu/text-testing-mocha) (by azu)—text-testing for Mocha

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
