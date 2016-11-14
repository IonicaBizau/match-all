## Documentation

You can see below the API reference of this module.

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

