/**
 * matchAll
 * Get all the matches for a regular expression in a string.
 *
 * @name matchAll
 * @function
 * @param {String} s The input string.
 * @param {RegExp} r The regular expression.
 * @return {Object} An object containing the following fields:
 *
 *  - `input` (String): The input string.
 *  - `regex` (RegExp): The regular expression.
 *  - `next` (Function): Get the next match.
 *  - `toArray` (Function): Get all the matches.
 *  - `reset` (Function): Reset the index.
 */
module.exports = function matchAll (s, r) {
    return {
        input: s
      , regex: r

        /**
         * next
         * Get the next match.
         *
         * @name next
         * @function
         * @return {String|null} The matched snippet.
         */
      , next () {
            var c = r.exec(s);
            return c && c[1];
        }

        /**
         * toArray
         * Get all the matches.
         *
         * @name toArray
         * @function
         * @return {Array} The matched snippets.
         */
      , toArray () {
            var res = []
              , c = null
              ;

            while (c = this.next()) {
                res.push(c);
            }

            return res;
        }

        /**
         * reset
         * Reset the index.
         *
         * @name reset
         * @function
         * @param {Number} i The new index (default: `0`).
         * @return {Number} The new index.
         */
      , reset (i) {
            return r.lastIndex = i || 0;
        }
    }
};
