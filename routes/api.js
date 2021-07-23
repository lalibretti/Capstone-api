var express = require ('express'); 
var router = express.Router(); 
const {Category, Question, Answer} = require('../lib/models');

// GET /categories
router.get('/category', async function(req, res, next) {
    let categories = await Category.findAll({})
    res.json(categories)
});
//GET question
router.get('/category/:categoryId/questions', async function(req, res, next) {
    // HINT: req.query, req.query.categoryId
    console.log(req.params)
    let questions = await Question.findAll({where: {categoryId: req.params.categoryId}})
    res.json(questions)
});
// GET answers
router.get('/questions/:questionId/answers', async function(req, res, next) {
    // HINT: req.query, req.query.questionId
    let answers = await Answer.findAll({where: {questionId: req.params.questionId}})
    res.json(answers)
});

//POST question
router.post('/category/:categoryId/questions', async function(req, res, next) {
    console.log(req.body)
    console.log(req.params)
    req.body.categoryId = req.params.categoryId
    console.log('the final body',req.body)
    let questions = await Question.create(req.body)
    res.json(questions)
});
//POST answer
router.post('/questions/:questionId/answers', async function(req, res, next) {
    console.log(req.body)
    console.log(req.params)
    req.body.questionId = req.params.questionId
    console.log('the final body',req.body)
    let answers = await Answer.create(req.body)
    res.json(answers)
});


//test route
router.get('/test', function(req,result,next){
    result.json ({api:true})
});
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;