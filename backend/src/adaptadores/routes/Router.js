const express = require('express');
const router = express.Router()

const userContoller = require('../controllers/UserController.js');
const ArticleController = require('../controllers/ArticleController.js');


// User router
router.post('/user', userContoller.create);
router.get('/user', userContoller.find);
router.put('/user/:id', userContoller.update);
router.delete('/user/:id', userContoller.delete);


// Article router
router.post('/article', ArticleController.create);
router.get('/article', ArticleController.find);
router.put('/article/:id', ArticleController.update);
router.delete('/article/:id', ArticleController.delete);





module.exports = router