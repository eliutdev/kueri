# kueri

Media Queries with JavaScript made easy

Determine if the document matches the media query options

```js
import kueri from "kueri";

const options = {
  minWidth: 1000,
  maxWidth: "750cm",
};

const k = kueri(options);

// window.innerWidth = 703
console.log(k.minWidth.matches); // false
console.log(k.maxWidth.matches); // true

k.minWidth.onchange = (e) => console.log("wtf", e);
```
