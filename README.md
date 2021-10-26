# kueri

Media Queries with JavaScript made easy

Determine if the document matches the media query string

```js
import kueri from "kueri";

const options = {
  minWidth: 1000,
  maxWidth: "750cm",
};

const k = kueri(options);

// window.innerWidth = 703
console.log(k.minWidth); // false
console.log(k.maxWidth); // true
```
