const express = require('express');
const router = express.Router();
const BlogPostData = require('../models/db.js');


router.get('/',(req,res)=>{
    BlogPostData.find({})
    .sort({_id:-1})
    .then((data)=>{
        console.log(data);
        res.json( data)
    })
    .catch((err)=>{
        console.log(err);
       
    })
})

router.post('/save',(req,res)=>{
    console.log('body',req.body)
    const data = req.body;
    const newBlogPost = new BlogPostData(data);

    newBlogPost.save((err)=>{
        if(err){
            res.status(500).json({
                mgs:'sorry,internal error'
            });
            return;

        }
        
         
          return  res.json({
                 msg:"data recived"
             });
         
        
    });
   
   
});

module.exports = router;