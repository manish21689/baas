var mcontroller = require('../controllers/master')
var express= require('express');
var router= express.Router();
router.post('/',mcontroller.Createdata);
router.get('/',mcontroller.getAll);
router.get('/:id',mcontroller.getById);
router.put('/:id',mcontroller.updateById);
router.delete('/:id',mcontroller.deletetById);
router.get('/counts',mcontroller.rcounts);
module.exports=router;