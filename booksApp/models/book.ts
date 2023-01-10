const {Schema, model} = require('mongoose');

interface IBook {
    id: string;
    title: string;
    description: string;
    authors: string;
    favorite: string;
    fileCover: string;
    fileName: string;
}

class BooksRepository extends Schema {
    id: string;
    title: string;
    description: string;
    constructor(id: string, title: string, description: string) {
        super({
            id,
            title,
            description
        })
    }

    createBook(book: IBook){

    }
    getBook(id: string){

    }
    getBooks(){

    }
    updateBook(id: string){
        return id
    }
    deleteBook(id: string){
        return id
    }
}

module.exports = model('Book', BooksRepository);