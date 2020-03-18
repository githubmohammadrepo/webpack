import { myFunction, myVariable, myClass } from './parentM.js'

myFunction()
console.log(myVariable)
let m=(new myClass()) 
m.show( )

class Book {
  constructor(name,pages,title=null,description = null) {
    this.name = name;
    this.title = title;
    this.pages = pages;
    this.description = description;
  }

  pageCount() {
    console.log(this.pages)
  }

  showName(){
    console.log(this.name)
  }
}

//using class book
let b = new Book('Vue pro',731,'Vue Pro Learning', ' learning complete vuejs from scratch');
