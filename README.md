# npm-exercise-3
## This program accepts a _SINGLE_ argument of infix expression and converts it into a postfix expression using the [expression-parser](https://www.npmjs.com/package/@estilles/expression-parser) module

1. Install dependency by running `npm install`

2. Run the index file in the cli using this command `node index <argument>`.

3. For the argument it is best to enclosed it in quotation marks to accept expression with spaces and an asterisk symbol(*).
> Note: Expressions can be grouped using the parenthesis.

4. Pass only a ***SINGLE*** argument or it will throw an error.
> Note: Empty parenthesis will also throw an error.
```
// Error
node index // requires a single argument

node index 1 + 2 // this will be treated as multiple arguments since it is separated by spaces

node index 1+2 2-3/4 // more than 1 argument

node index 1*2 // argument that contains an asterisk symbol(*) will be treated differently if it is not enclosed in quotation marks. This will throw an error since the asterisk is a reserved symbol in the terminal.

node index "()" // will throw an error of empty parenthesis

// Correct
node index 1+2 

node index '1 + 2 * 3'

node index "1 + 2 * 3"

node index "(1 + 2) / (3 * 4)"
```

5. Then, it will display a string of a converted postfix version of the infix expression.
```
e.g.
node index 1+2 => '1 2 +'

node index '1 + 2 * 3' => '1 2 3 * +'

node index "(1 + 2) / (3 * 4)" => '1 2 + 3 4 * /'

node index "-1 + 2" => 1 ~ 2 + // converts negation to tilde(~)
```
