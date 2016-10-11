
# match-all

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/match-all.svg)](https://www.npmjs.com/package/match-all) [![Downloads](https://img.shields.io/npm/dt/match-all.svg)](https://www.npmjs.com/package/match-all) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get all the matches for a regular expression in a string.

## :cloud: Installation

```sh
$ npm i --save match-all
```


## :clipboard: Example



```js
const matchAll = require("match-all");

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
Get the next match.

#### Return
- **String** The matched snippet.

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


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`emojer`](https://github.com/IonicaBizau/emojer#readme)—Emojify all the things.
 - [`text-testing-mocha`](https://github.com/azu/text-testing-mocha) (by azu)—text-testing for Mocha

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
