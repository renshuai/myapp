var express = require('express');

var router = express.Router();
maxId = 2;
var books = [{_id:1,name:"book1",price:200},{_id:2,name:"book2",price:230}];
router.get('/', function(req, res, next) {
    res.json(books);
});

router.route('/')
    .get(function (req, res) {
        res.json(books);
    })
    .post(function (req, res) {
        let book = req.body;
        book._id=++maxId
        // let bk=_.cloneDeep(book);
        books.push(book);
        res.json(books);
    })
router.delete('/:id', function (req, res) {
    let id = req.params.id;
    let index=books.findIndex(item=>item.id==id)
    books.splice(index,1);
    res.json(books);
})

module.exports = router;
