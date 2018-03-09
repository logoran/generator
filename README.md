# logoran-generator

http://logoran.com/

<img src='https://dl.dropboxusercontent.com/u/6396913/logoran/logo.png' width='300'/>

[Logoran](https://www.npmjs.com/package/logoran) application generator.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

## Features

- Support Koa（supported）
- Support Logoran（koa or logoran middleware supported,need Node.js 7.6+ ,babel optional）

## Installation

```sh
$ npm install -g logoran-generator
```

with 2 commands

- koa (Support koa)
- logoran (Support logoran)

## Quick Start koa


The quickest way to get started with koa is to utilize the executable `koa` to generate an application as shown below:

Create the app:

```bash
$ koa /tmp/foo && cd /tmp/foo
```

Install dependencies:

```bash
$ npm install
```

Rock and Roll

```bash
$ npm start
```

## Quick Start logoran

The quickest way to get started with logoran is to utilize the executable `logoran` to generate an application as shown below:

Create the app:

```bash
$ logoran /tmp/foo && cd /tmp/foo
```

Install dependencies:

```bash
$ npm install
```

Rock and Roll

```bash
$ npm start
```

more detail see [logoran-demo](https://github.com/logoran/demo)

## Command Line Options

This generator can also be further configured with the following command line flags.

    -h, --help          output usage information
    -V, --version       output the version number
    -e, --ejs           add ejs engine support (defaults to jade)
        --hbs           add handlebars engine support
    -n, --nunjucks      add nunjucks engine support
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory

目前选项-c还没有实现

## Git Branch Details

- master = logoran generator

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/logoran-generator.svg
[npm-url]: https://npmjs.org/package/logoran-generator
[downloads-image]: https://img.shields.io/npm/dm/logoran-generator.svg
[downloads-url]: https://npmjs.org/package/logoran-generator