const Book = require('./book')

class Biography extends Book{
    constructor(title,author,totalPage,figure){
        super(title,author,totalPage)
        this.figure = figure
    }
}


module.exports = Biography