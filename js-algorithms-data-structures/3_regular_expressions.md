# Regular expressions

## Introduction

Regular expressions are often used to match patterns in strings.

# `test()` method

The `test()` method returns `true` if the pattern is found in the string, and `false` if not. It revceives a string (regex) as an argument.

```javascript
let myMail = "johnnydoe@mail_service.com";
let regex = /mail_service/;
console.log(regex.test(myMail)); // true
```

# `match()` method

The `match()` method returns an array of matches. If there are no matches, it returns `null`. It revceives a string (regex) as an argument.

```javascript
let myMail = "johnnydoe@mail_service.com";
let regex = /mail_service/;
console.log(myMail.match(regex)); // ['mail_service']
```

## `g` flag (global search)

The `g` flag is used to search for multiple matches in a string.

```javascript
let myMail = "johnnydoe@johnny_mail_service.com";
let regex = /johnny/g;
console.log(myMail.match(regex)); // ['johnny', 'johnny']
```

# Searching for multiple patterns

The pipe character `|` is used to search for multiple patterns.

```javascript
let myMail = "johnnydoe@mail_service.com";
let regex = /mail_service|gmail/;
console.log(regex.test(myMail)); // true
```

# `i` flag (ignoring case)

When testing for a pattern, it is possible to ignore the case by using the `i` flag.

```javascript
let myMail = "johnnydoe@MAIL_SERVICE.com";
let regex = /mail_service/i;
console.log(regex.test(myMail)); // true
```

# Wildcard character

The wildcard character `.` is used to match any character.

```javascript
let exampleStrA = 'Let's have fun with regular expressions!';
let exampleStrB = 'To make hay while the sun shines.';
let regex = /.un/;
console.log(regex.test(exampleStrA)); // true
console.log(regex.test(exampleStrB)); // true
```

# Using brackets to match a range of characters

Brackets are used to match a range of characters.

```javascript
const strA = "cat";
const strB = "cut";
const strC = "cot";

const strD = "cit";
const strE = "cet";

let regex = /c[auo]t/;

console.log(regex.test(strA)); // true
console.log(regex.test(strB)); // true
console.log(regex.test(strC)); // true

console.log(regex.test(strD)); // false
console.log(regex.test(strE)); // false
```

## Ranges of letters

Inside the brackets, the first character is the starting point, and the second character is the ending point. For example, `[a-e]` is the same as `[abcde]`.

# Negated character sets

If it is not desired to match a range of characters, the caret `^` character can be used to negate the character set.

```javascript
// Trying to exclude vowels and numbers.
let exampleStr = "Three sad tigers, swallowed wheat in a wheat field.";
let regex = /[^aeiou0-9]/gi;
console.log(exampleStr.match(regex));
```

## Other uses of the caret (`^`) character

The caret character can be used to match the beginning of a string.

```javascript
let exampleStr = "Hello, world!";
let regexA = /^Hello/;
console.log(regexA.test(exampleStr)); // true

// Search at the end of the string can be achieved by using the $ character.
let regexB = /world!$/;
console.log(regexB.test(exampleStr)); // true
```

# Finding characters that occur one or more times

The `+` character is used to find characters that occur one or more times.

```javascript
let exampleStr = "Mississippi";
let regex = /s+/gi;
console.log(exampleStr.match(regex)); // ['ss', 'ss']
```

# Finding characters that occur zero or more times

The `*` character is used to find characters that occur zero or more times.

```javascript
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // ['goooooooo']
gPhrase.match(goRegex); // ['g']
oPhrase.match(goRegex); // null
```

That will match all the `g` characters followed by zero or more `o` characters.

# Lazy matching

By default regex tries to search the largest substring that matches the pattern. The `?` character can be used to make the regex search for the smallest substring that matches the pattern.

```javascript
let ship = "Titanic";

// Default behavior or greedy matching.
let regexA = /t[a-z]*i/;
console.log(ship.match(regexA)); // ['Titani']

// Lazy matching.
let regexB = /t[a-z]*?i/;
console.log(ship.match(regexB)); // ['Ti']
```

# Character classes

Insead of using long character sets, it is possible to use character classes. Character classes are predefined sets of characters, for example the `\w` character class matches all alphanumeric characters (including underscore). The `\w` character class is equivalent to `[A-Za-z0-9_]`.

```javascript
let exampleStr =
  "Try to count all the alphanumeric characters in this sentence.";
let regex = /\w/g; // g flag is used to search for multiple matches.
console.log(exampleStr.match(regex).length); // 43
```

For searching for non alphanumeric characters, the `\W` character class can be used.

```javascript
let exampleStr =
  "Try to count all the non 'alphanumeric characters' in this sentence!";
let regex = /\W/g;
console.log(exampleStr.match(regex).length); // 13
```

Other character classes are:

- `\d` - matches all digits.
- `\D` - matches all non digits.
- `\s` - matches all whitespace characters.
- `\S` - matches all non whitespace characters.
- `\b` - matches all word boundaries.
- `\B` - matches all non word boundaries.

> It is useful to include the `g` flag when using character classes.

# Example: creating a regex that checks if a string is a valid username

Conditions:

- Usernames can only use alpha-numeric characters.
- The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
- Username letters can be lowercase and uppercase.
- Usernames have to be at least two characters long. A two-character username can only use alphabet letters as character.

- Must start with at least characters: `/^[a-z][a-z]+/`
- Can have zero or more numbers at the end: `/\d*$/`

Result: `/^[a-z][a-z]+\d*$/i`

Exeption: `Z97` is not matched by the regex.

Adding an aditional case:

- Usernames with three characterts, but the last two are numbers: `^[a-z]\d\d+$`

Final regex: `/^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i`
