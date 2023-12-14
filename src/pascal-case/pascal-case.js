/*
Create a function `pascalCase` which convert a sentence into upper case Camel Case, also known as Pascal Case.
Example:
* "this is sparta" > "ThisIsSparta"
* "sO rAdicAL DuDe" > "SoRadicalDude"
You can't use a loop!
Don't mutate the parameter.
*/

const pascalCase = (string) => {
  const splitedString = string.split(" ")

  const firstLettersUppered = splitedString.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  )

  return firstLettersUppered.join("")
}

module.exports = pascalCase
