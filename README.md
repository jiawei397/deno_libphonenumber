# deno_libphonenumber

I used libphonenumber which is thransfered by
`https://esm.sh/libphonenumber-js@1.9.20`, and then get like this:

```js
/* esm.sh - libphonenumber-js@1.9.20 */
export * from "https://cdn.esm.sh/v54/libphonenumber-js@1.9.20/es2021/libphonenumber-js.js";
export { default } from "https://cdn.esm.sh/v54/libphonenumber-js@1.9.20/es2021/libphonenumber-js.js";
```

But it maybe change the `v54` to other version, it caused that I cannot lock my
project.

So I want to give a locked file.

Now you can use like this:

```ts
import parsePhoneNumber from "libphonenumber-js";

const phoneNumber = parsePhoneNumber(" 8 (800) 555-35-35 ", "RU");
if (phoneNumber) {
  phoneNumber.country === "RU";
  phoneNumber.number === "+78005553535";
  phoneNumber.isValid() === true;
  // Note: `.getType()` requires `/max` metadata: see below for an explanation.
  phoneNumber.getType() === "TOLL_FREE";
}
```
