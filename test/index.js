const tester = require("tester")
    , match = require("../lib")
    ;

tester.describe("run the tests", test => {
    var s = "Hello _World_ and _Mars_";
    test.it("match all", () => {
        test.expect(match(s, /_([a-z]+)_/gi).toArray()).toEqual(["World", "Mars"]);
    });
    test.it("get matches one by one", () => {
        var m = match(s, /_([a-z]+)_/gi);
        test.expect(m.next()).toBe("World");
        test.expect(m.next()).toBe("Mars");
        test.expect(m.next()).toBe(null);
    });
    test.it("reset the index", () => {
        var m = match("Hello _World_, _Mars_, _Pluto_ and _Moon_!", /_([a-z]+)_/gi);
        test.expect(m.next()).toBe("World");
        m.reset();
        test.expect(m.next()).toBe("World");
        test.expect(m.next()).toBe("Mars");
        m.reset(20);
        test.expect(m.next()).toBe("Pluto");
    });
});
