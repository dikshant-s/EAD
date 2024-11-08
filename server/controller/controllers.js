const express = require('express');
const router = express.Router();
const Data = require('../model/models');
const jwt = require('jsonwebtoken');

require('dotenv').config();


router.get('/', async (req, res) => {
  try {
    const aliens = await Data.find();
    res.json(aliens); 
  } catch (err) {
    res.send('Error' + err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const res1 = await Data.findById(req.params.id);
    res.json(res1);
  } catch (err) {
    res.send('Error' + err);
  }
});

router.post('/post', async (req, res) => {
  const studentData = new Data 
  ({
    name: req.body.name,
    rollno: req.body.rollno,
    sub: req.body.sub,
    dept: req.body.dept,
    section: req.body.section,
  });
  try {
    const a1 = await studentData.save();
    res.json(a1);
  } catch (err) {
    res.send('Error sending data')
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const studentData = await Data.findById(req.params.id);
    studentData.sub = req.body.sub;
    studentData.name = req.body.name;
    const a1 = await studentData.save();
    res.json(a1);
  } catch (err) {
    console.error('Error updating data:', err.message);
    res.status(500).send('Error updating data');
  }
});

router.delete('/delete/:id',async(req,res) =>{
  try{
    const {id} = await Data.findById(req.body.params);
    const deleteOperation = await Data.findByIdAndDelete(id);
    res.json(deleteOperation);
  }catch(err){
    res.status(400).json({
      success: false,
      message:"Cannot delete"
    })
  }
})

//Authentication token middleware
const authenticationToken = async(req,res,next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split('')[1]
  if(!token) return res.sendStatus(401)

  jwt.verify(token,process.env.ACCESS_TOKEN,(err,user) => {
    if (err){
      return res.sendStatus(403)
    }
    req.user = user
    next();
  })
}

router.get('/login',(req,res) => {
  const username = req.body.username;
  const user = {name : username};
  const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN);
  res.json({accessTokenis: accessToken})
})

router.use(authenticationToken);

router.post('/posts',(req,res) => {
  console.log(req.user.name);
  res.json(posts.filter(post => post.name === req.user.name));
})

module.exports = router;
