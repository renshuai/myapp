
var express = require('express');
var path = require('path');
var fs = require('fs');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var zoosRouter = require('./routes/zoo');
var bookRouter = require('./routes/books');

var app = express();

app.set('view engine', 'jade');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/zoos', zoosRouter);
app.use('/books', bookRouter);

// app.post('/zoos/upload', upload.single('avator'), function (req, res, next) {
//
//     let file = req.file;
//     console.log(file);
//     res.end('success');
//     fs.copyFile(__dirname + '/uploads/' + file.filename, __dirname + '/public/images/' + file.originalname, (err) => {
//         if (err) throw err;
//         console.log('源文件已拷贝到目标文件');
//     });
// })
// app.get('/books',function (req,res) {
//     const books = [{id:1,name:"book1",price:200},{id:2,name:"book2",price:230}];
//     res.json(books);
// })
//
// app.post('/addBooks',function (req,res) {
//     res.json({
//         type: 'success'
//     })
// })
//
// app.post('/deleteBooks',function (req,res) {
//     res.json({
//         type: 'success'
//     })
// })


module.exports = app;
