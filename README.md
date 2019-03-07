# Intro to Sass/Gulp

What they are, what problems they solve, and how to use them.

* Go to https://robertakarobin.com/sassgulp
* 'View Source'
* Look at the CSS file, [./dist/main.css](https://robertakarobin.com/sassgulp/dist/main.css)

## What's the problem with CSS?

### 1. What in main.css is repetitive?

What things *look* repetitive? What lines actually repeat? (Excluding blank lines and `}`, there are 6 lines that repeat -- one of them 10 times!)

<details><summary> </summary>

1.	2 x `@media (min-width: 500px) {`
2.	2 x `@media (max-width: 499px) {`
3.	3 x `#pokemon-list {`
4.	3 x `#pokemon-list div {`
5.	5 x `color: #fff;`
6.	10 x `color: #000;`
</details>

### 2. What does 'DRY' mean, when it comes to code?

<details><summary> </summary>
Don't Repeat Yourself. If code contains a lot of repeated pieces, it's a very good sign that the code could be made more efficient.
</details>

## What's the solution? Sass.

Go to https://robertakarobin.com/sassgulp/src/main.scss.

This is the Sass that generated `main.css`. It's about half the size of `main.css`, and much less repetitive.

SASS goes in, CSS goes out.

There are two dialects of Sass: "Sass" and SCSS.

SCSS means "Sassy CSS". It's CSS on steroids. Regular CSS is valid SCSS.

We're just using SCSS. Sass looks different. Regular CSS is not valid Sass.

### 1. What do the words that begin with `$` do?

If this was JavaScript, what would we call them?

<details><summary> </summary>

Variables. Pieces of data you can re-use. Great for color palettes and media queries.
</details>

### 2. In `$media-small`, what do you think is the value of `$breakpoint - 1`?

<details><summary> </summary>

`499px`. Sass lets you do math!
</details>

### 3. BONUS: What does syntax `#{$like-this}` do?

<details><summary> </summary>

String interpolation. Lets you use variables inside of other variables.
</details>

### 4. BONUS: What JavaScript data type does `$types` resemble?

<details><summary> </summary>

An object, or map.
</details>

### 5. BONUS: What programming concept is shown in the `@each` snippet at the end?

<details><summary> </summary>

Looping.
</details>

### 6. BONUS: What does `#pokemon-types{ & > *{` mean? What if `& >` was removed?

<details><summary> </summary>

"Select all elements that are children of `#pokemon-types`."

Without `& >`, it would mean, "Select all elements that are descendents of `#pokemon-types`."
</details>

### Other cool stuff

* Nesting, in case you missed it
* `@import` other SCSS files
* `lightness` is built in
* `@if/@else`
* Lots of other useful stuff

## You try Sass

Do parts 1 and 1.5 of:

https://github.com/RobertAKARobin/sassflag

## What's the problem with Sass?

Copying and pasting your Sass to a converter, and then back to a CSS file, is really annoying.

## What's the solution? Gulp.

### Two non-Gulp questions first:

#### 1. In plain English, what's the purpose of a pipe, like a sewage pipe or gas pipe?<summary>

<details><summary> </summary>

It moves stuff from Point A to Point B.
</details>

#### 2. Are these two pieces of JavaScript functionally identical?

```js
thing.function1().function2().function3()
```

```js
thing
  .function1()
  .function2()
  .function3()
```

<details><summary> </summary>

Yes. JavaScript doesn't care about newlines here.
</details>

### In [./gulpfile.js](https://www.robertakarobin.com/sassgulp/gulpfile.js), in `buildCSS`...

What do you think the following snippets do/mean?

1. `src`
2. `pipe`
3. `sass`
4. `dest`
5. Bonus: `outputStyle: expanded`

<details><summary> </summary>

Gulp takes a Sass file, and spits out a CSS file.

1. `src`: Which files Gulp should look at
2. `pipe`: How Gulp passes data from one task to another
3. `sass`: Converts Sass to CSS
4. `dest`: Where the resulting CSS should go
5. `outputStyle: expanded`: Says the resulting CSS should be all pretty, instead of minified
</details>

### In `buildJS`:

1. What's the difference between `src(thing)` and `src([thingOne, thingTwo])`?
2. What does the `*` in `src` do?
3. What does `concat` do?
4. What does `uglifyJS` do, and why would we want it?

<details><summary> </summary>

1. `src` can "grab" one file or many files
2. `*` is a "wildcard" that lets you grab many files with names that follow a pattern
3. `concat` combines multiple files into one
4. `uglifyJS` removes spaces, long variable names, etc. from the code, reducing its file size
</details>

### We see `parallel` used here...

Gulp also provides a similar function, `series`. What do you think is the difference between them?

<details><summary> </summary>

`parallel` runs tasks at the same time. `series` runs them one after another, which can be useful if one task needs to finish before another can start.
</details>

### What's the purpose of the first "argument" in `watch`?

<details><summary> </summary>

It indicates what files Gulp should "watch" for changes in.

Note that `README.md` doesn't match any of the patterns in there -- there's no point in Gulp re-building everything when the README changes, because the README doesn't have any impact on the code.
</details>

## You try Gulp

Do part 2 of https://github.com/RobertAKARobin/sassflag.