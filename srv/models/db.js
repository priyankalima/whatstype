const mongoose = require('mongoose')

// creating schema

const Schema = mongoose.Schema;
const BlogPost = new Schema({
title:String,
body:String,
date:{
    type:String,
    default: Date.now()
}})

//model
const BlogPostData = mongoose.model('BlogPostData',BlogPost);
module.exports = BlogPostData;

//data
// const data ={
//     title:'my story',
//     body:'its a awesome feeling that i did my work!!'
// }

// //instance of the data
// const newBlogPost = new BlogPostData(data);
// BlogPostData.find({_id:'6030cc0dbf34520b60c0a7e8'})
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })
// module.exports= newBlogPost;


//module.export = mongoose.data.BlogPostData || mongoose.model('BlogPostData',BlogPost);


