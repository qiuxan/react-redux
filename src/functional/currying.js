// function add(a) {
//     return function (b) {
//         return a + b
//     }
// }

// const add2 = a => b => a + b


// add2(1)(5)

// console.log("Hello World!");
import { compose, pipe } from 'lodash/fp'

// trim
// wrapInDiv
let input = "  JavaScript  "
//let output = "<div>"+ input.trim() +"</div>"

const trim = str => str.trim()
const wrapInDiv = str => `<div>${str}</div>`
//const wrapInSpan = str => `<span>${str}</span>`
const wrap = type => str => `<${type}>${str}</${type}>`
const toLowerCase = str => str.toLowerCase()

//const result = wrapInDiv(toLowerCase(trim(input)))

// const transformCompose = compose(wrapInDiv, toLowerCase, trim)

const transform = pipe(trim, toLowerCase, wrap('div'))

console.log(wrap('div')(input))
console.log(toLowerCase(wrap('div')(input)))
console.log(
    'without lodash',
    trim(toLowerCase(wrap('div')(trim(input))))
)



console.log(transform(input));

// console.log(wrap('div')('hah'));

// function add(a) {
//     return function (b) {
//         return a + b
//     }
// }

// console.log(add(1)(5));