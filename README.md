# Pokélist

For teaching Gulp/SASS/Github Pages.

## SASS

<details><summary>What's the most repetive part of [./dist/main.css](./dist/main.css)?</summary>
All the classes for Pokémon types.
</details>

---

<details><summary>In [./dist/main.css](./dist/main.css), which lines occur more than once?

Don't count blank lines and `}`. Hint: there are 6.</summary>

1.	2 x `@media (min-width: 500px) {`
2.	2 x `@media (max-width: 499px) {`
3.	3 x `#pokemon-list {`
4.	3 x `#pokemon-list div {`
5.	5 x `color: #fff;`
6.	10 x `color: #000;`
</details>

---

## Gulp

<details><summary>In [gulpfile.js](./gulpfile.js), what does `buildCSS` do?

To answer this, let's break it down. What you think the following snippets do/mean?

1. `src`
2. `pipe`
3. `sass`
4. `dest`
5. Bonus: `outputStyle: expanded`
</summary>

Gulp takes a SASS file, and spits out a CSS file.

1. `src`: Which files Gulp should look at
2. `pipe`: How Gulp passes data from one task to another
3. `sass`: Converts SASS to CSS
4. `dest`: Where the resulting CSS should go
5. `outputStyle: expanded`: Says the resulting CSS should be all pretty, instead of minified
</details>

---

<details><summary>What does `buildJS` do?

1. What's the difference between `src(thing)` and `src([thingOne, thingTwo])`?
2. What does the `*` in `src` do?
3. What does `concat` do?
4. What does `uglifyJS` do, and why would we want it?
</summary>

1. `src` can "grab" one file or many files
2. `*` is a "wildcard" that lets you grab many files with names that follow a pattern
3. `concat` combines multiple files into one
4. `uglifyJS` removes spaces, long variable names, etc. from the code, reducing its file size
</details>

---

<details><summary>We see `parallel` used here. Gulp also provides a similar function, `series`. What do you think is the difference between them?</summary>

`parallel` runs tasks at the same time. `series` runs them one after another, which can be useful if one task needs to finish before another can start.
</details>

---

<details><summary>What's the purpose of the first "argument" in `watch`?</summary>

It indicates what files Gulp should "watch" for changes in.

Note that `README.md` doesn't match any of the patterns in there -- there's no point in Gulp re-building everything when the README changes, because the README doesn't have any impact on the code.
</details>