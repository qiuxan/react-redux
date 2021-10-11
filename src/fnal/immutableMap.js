import { Map } from "immutable";

let book = Map({ title: 'Harry Potter' });

function publish(book) {
    return book.set("isPublished", true);
}

book = publish(book);

console.log(book.toJS()); 

//original problem:

// let book = { title: 'Harry Potter' };

// function publish(book) {
//     book.isPublished = true
// }

// publish(book);

// console.log(book);