# Regular Expression

## What is a Regular expression?
A regular expression is a group of characters, digits, or special characters with a specific pattern to follow for future comparison with another group of characters.

### Examples:
- A name has a pattern of characters from A to Z: 'Smith'
- A float number has a pattern of digits dot and digits: '10.50'
- A phone number has a pattern of 10 digits : '9876543210'

### Syntax in JavaScript:

 ```/pattern/modifier(s);```
 
Modifiers:
- g --global match
- i --search for case sensitive match, in the case is lowercase or Uppercase depending on the pattern

Brackets:
A pattern can be compose also by brackets.

- [abc] --The group of all characters from the alphabet
- [0-9] --The group of all digits between 0 and 9
- (a|b) --Search for 'a' or 'b'

## Examples of validation of data with regular expressions in JavaScript

 ```javascript
 let pattern = /e/g;
 
 pattern.test('Hello'); // true, search the letter 'e' in the string 'Hello' and returns a boolean
```


## References
- [JavaScript Regex Reference](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)
- [Regex Generator](https://regex101.com/)
