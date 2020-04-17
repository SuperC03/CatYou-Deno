# CatYou - Deno
Every Framework Needs a Cat API

[![Build Status](https://travis-ci.org/SuperC03/CatYou-Deno.svg?branch=master)](https://travis-ci.org/SuperC03/CatYou-Deno)

## Usage
Quite similarily to the [npm package](https://www.npmjs.com/package/cat-me), Cat-You generates cats either by random, or by passing in a particular cat name as a parameter.

```javascript
import { catYou } from 'https://deno.land/x/cat_you/mod.ts';

console.log(catYou());

//    /\ ___ /\
//   (  o   o  )
//    \  >#<  /
//    /       \
//   /         \       ^
//  |           |     //
//   \\         /    //
//    ///  ///   --

console.log(catYou("nyan"));

//    ☆    ☆  ☆
//  ┈┈┈┈ ╭━━━━━━╮  ☆
//  ┈☆ ┈┈┃╳╳╳▕╲▂▂╱▏
//  ┈┈☆ ┈┃╳╳╳▕▏▍▕▍▏
//  ┈┈ ╰━┫╳╳╳▕▏╰┻╯▏
//  ☆ ┈┈┈┃╳╳╳╳╲▂▂╱
//     ☆ ╰┳┳━━┳┳╯   ☆

// Options: grumpy, approaching, tubby, confused, playful, thoughtful, delighted, nyan, resting
```


## Credits
This Module is simply an improvised version of the cat-me package by [coleww](https://github.com/coleww), who obviously is much better at ASCII art than I am :)
