
import { compose, pipe } from 'lodash/fp'

// trim
// wrapInDiv
let input = "  JavaScript  "
//let output = "<div>"+ input.trim() +"</div>"

const trim = str => str.trim()
const wrapInDiv = str => `<div>${str}</div>`

const toLowerCase = str => str.toLowerCase()

//const result = wrapInDiv(toLowerCase(trim(input)))

const transformCompose = compose(wrapInDiv, toLowerCase, trim)

const transform = pipe(trim, toLowerCase, wrapInDiv)

console.log(transformCompose(input));
console.log(transform(input));