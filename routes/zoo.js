var express = require('express');
const fs = require('fs');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' });
var path = require('path')

let __rootname = path.resolve(__dirname, '..')

var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('all animals');
});

router.post('/uploads', upload.single('avator'),function(req, res, next) {
    // res.send('all animals1');
    let file = req.file;
    console.log(file);
    res.end('success');
    fs.copyFile(__rootname + '/uploads/' + file.filename, __rootname + '/public/images/' + file.originalname, (err) => {
        if (err) throw err;
        console.log('源文件已拷贝到目标文件');
    });
});


module.exports = router;
