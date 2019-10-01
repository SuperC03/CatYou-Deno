import {
    catYou
} from "./mod.ts";
import {
    Cats
} from "./cats.ts";
import {
    runTests,
    test
} from "https://deno.land/std/testing/mod.ts";
import {
    assertEquals
} from "https://deno.land/std/testing/asserts.ts";

test({
    name: "Consistant Cats",
    fn(): void {
        assertEquals(catYou('nyan'), Cats[7].body.join('\n'));
        assertEquals(catYou('grumpy'), Cats[0].body.join('\n'));
        assertEquals(catYou("delighted"), Cats[6].body.join('\n'));
    }
});

runTests();