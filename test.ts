import parsePhoneNumber from "./mod.ts";
import {
    assert,
} from "https://deno.land/std@0.110.0/testing/asserts.ts";

Deno.test("Hello Test", () => {
    const phoneNumber = parsePhoneNumber(" 8 (800) 555-35-35 ", "RU");
    if (phoneNumber) {
        assert(phoneNumber.country === "RU");
        assert(phoneNumber.number === "+78005553535");
        assert(phoneNumber.isValid() === true);
        // Note: `.getType()` requires `/max` metadata: see below for an explanation.
        // assertEquals(phoneNumber.getType(), 'TOLL_FREE') // TODO not equals
    }
});
