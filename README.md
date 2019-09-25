# uze - Another JavaScript Utility Library

[![forthebadge](https://forthebadge.com/images/badges/fuck-it-ship-it.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)](https://forthebadge.com)

## About

uze is bundeled into multiple sub-packages, such as `math`, `string` or `object`. `uze.string` contains functions for strings, and that's the theme for all the other packages.

## Install

Install it via npm using `npm install uze` or yarn using `yarn add uze`.

## Usage

### uze.string

#### capitalize

`uze.string.capitalize()` turns the first character of a string to uppercase, all the remaining characters to lowercase.

##### Example

```javascript
uze.string.capitalize('fOO bAr')
// returns 'Foo bar'
```

#### isNullOrEmpty

`uze.string.isNullOrEmpty()` tests wether a string is null, undefined or empty.

##### Example

```javascript
uze.string.isNullOrEmpty('Lorem Ipsum')
// returns false

uze.string.isNullOrEmpty('')
// returns true

let x = null
uze.string.isNullOrEmpty(x)
// returns true
```

#### isString

`uze.string.isString()` will test if a passed parameter is a string.

##### Example

```javascript
let x = 12
uze.string.isString(x)
// returns false

let y = 'Baz'
uze.string.isString(y)
//returns true
```

#### random

`uze.string.random()` returns a random alphanumeric string.

##### Example

```javascript
uze.string.random()
// could return 'Fc9lpEm5'
// no parameter defaults to length 8

uze.string.random(5)
// could return 'nUnjk'
```

#### sameContent

`uze.string.sameContent()` tests wether two strings have the same content while disregarding capitalization.

##### Example

```javascript
uze.string.sameContent('foo bar', 'FOO BAR')
//returns true

uze.string.sameContent('Lorem ipsum', 'Dolor sit amet')
// returns false
```

#### trimText

`uze.string.trimText()` trims text to a specified length. It can be set to not cut words of.

##### Example

```javascript
uze.string.trimText('Lorem ipsum dolor sit amet.', 7)
// returns 'Lorem i'

uze.string.trimText('Lorem ipsum dolor sit amet.', 7, true)
// returns 'Lorem'
```

#### upperFirst

`uze.string.upperFirst()` capitalizes the first letter of a string.

##### Example

```javascript
uze.string.upperFirst('foo bar')
// returns 'Foo bar'

uze.string.upperFirst('FOO BAR')
// returns 'FOO BAR'
```

### uze.object

#### isEmptyObject

`uze.object.isEmptyObject()` will check, wether a JavaScript object has no keys / is empty.

##### Example

```javascript
uze.object.isEmptyObject({})
// returns true

uze.object.isEmptyObject({ foo: 'bar' })
// returns false
```

#### sortByKeys

`uze.object.sortByKeys()` will sort the keys of an object.

##### Example

```javascript
uze.object.sortByKeys({ c: 1, a: 2, b: 3 })
// returns { a: 2, b: 3, c: 1 }
```

#### swap

`uze.object.swap()` will swap the keys of an object with its value.

```javascript
uze.object.swap({ foo: 'bar' })
//returns { bar: 'foo' }
```

### uze.math

#### factorial

`uze.math.factorial()` calculates the factorial of a number.

##### Example

```javascript
uze.math.factorial(4)
// returns 24
```

#### isBin

`uze.math.isBin()` checks wether a number or string matches the binary number format.

##### Example

```javascript
uze.math.isBin(10)
// return true

uze.math.isBin(42)
// returns false

uze.math.isBin('DA')
// returns false
```

#### isDec

`uze.math.isDec()` checks wether a number or string matches the decimal number format.

##### Example

```javascript
uze.math.isDec(10)
// return true

uze.math.isDec(42)
// returns true

uze.math.isDec('DA')
// returns false
```

#### isHex

`uze.math.isHex()` checks wether a number or string matches the hexadecimal number format.

##### Example

```javascript
uze.math.isHex(10)
// return true

uze.math.isHex(42)
// returns true

uze.math.isHex('DA')
// returns true

uze.math.isHex('Foo Bar')
// returns false
```

#### isEven

`uze.math.isEven()` checks wether a number is even.

##### Example

```javascript
uze.math.isEven(42)
// return true

uze.math.isEven(1337)
// return false
```

#### isOdd

`uze.math.isOdd()` checks wether a numer is odd.

##### Example

```javascript
uze.math.isOdd(42)
// returns false

uze.math.isOdd(1337)
// returns true
```

#### isNumber

`uze.math.isNumber()` checks wether a parameter is of type number.

##### Example

```javascript
uze.math.isNumber(42)
// returns true

uze.math.isNumber('foo bar')
// returns false

uze.math.isNumber({ foo: 'bar' })
// returns false
```

#### isPrime

`uze.math.isPrime()` checks wether a number is prime.

##### Example

```javascript
uze.math.isPrime(17)
// returns true

uze.math.isPrime(42)
// returns false
```

#### toBin

`uze.math.toBin()` converts a number into a binary number.

##### Example

```javascript
uze.math.toBin(42)
// returns '00101010'

uze.math.toBin('2A', { hex: true })
// returns '00101010'
```

#### toDec

`uze.math.toDec()` converts a number into a decimal number.

##### Example

```javascript
uze.math.toDec('00101010', { bin: true })
// returns 42

uze.math.toDec('2A', { hex: true })
// returns 42
```

#### toHex

`uze.math.toHex()` converts a number into a hexadecimal number.

##### Example

```javascript
uze.math.toHex(42)
// returns '2A'

uze.math.toHex('00101010', { bin: true })
// returns '2A'
```
