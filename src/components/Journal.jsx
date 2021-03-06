import React from 'react';
import axios from 'axios';
import Img2 from '../assets/img2.svg';
import '../styles/journal.css';
import Img3 from '../assets/img3.jpg';
class Journal extends React.Component{

//constructor with super key optional
 constructor(){
   super();
 }

//state position
  state ={
    show:false,
    title:'',
    body:'',
    posts: []
  };


//component did mount is updating data
componentDidMount = ()=>{
  this.getBlogPost();
}


//getting data or api from the server using axios
  getBlogPost=()=>{
    axios.get('http://localhost:4000/api')
    .then((res)=>{
      const data = res.data;
      this.setState({
        posts:data
      });
      console.log('data received')
    })
    .catch((err)=>{
      alert('getting errors')
    })
  }

//handling data of form input values
  handleChange =({target})=>{
       const {name,value} = target;
       this.setState({[name]:value});
  };

//submiting input value in server using axios
  submitForm =(e)=>{
      e.preventDefault();
      const payload ={
        title:this.state.title,
        body:this.state.body
      };
       
      //axios data
      axios({
        url:'http://localhost:4000/api/save',
        method:'POST',
        data:payload
      })
      .then(()=>{
       console.log('data has been sent to the server')
       this.resetUserInput();
       this.getBlogPost();
      document.getElementById('success').innerHTML="Post Submited Successfuly"
      
      })
      .catch(()=>{
       console.log('somethings went wrong please try after some time')
       document.getElementById('failed').innerHTML="Something Went Wrong Please try again"
      });
  };

//reseting user input data
resetUserInput=()=>{
  this.setState({
    title:'',
    body:''
  })
};

//displaying data to the react interface code
displayBlogPost = (posts) =>{
  if(!posts.length) return null;
return posts.map((post,index)=>{
  return <div key={index} className="map">
    <img src={Img3} width="30" height="30" className="image"/>
    <span style={{paddingLeft:'5px',fontWeight:'bold'}}>Sweety Priya</span>
    <h3>{post.title}</h3>
    <p className="preTag">{post.body}</p>
  </div>
})
}


 //rendering jsx code
   render(){
       console.log('State',this.state);//display in console
       

       return(
           <>
           {/* created a navabar for navigation */}
            <nav className="navbar">
             <div className="container nav-demo">

               <div className="text">
                 Whats<span className="span1">?</span>
                 Type<span className="span1">!</span>
               </div>
            
               <div >
                <button className="button-float-create"onClick={()=>{ this.setState({show:!this.state.show})}}>+</button>
                <img src={Img3} className="button-user-create"/>
               </div>

             </div>
           </nav>
           {/* ----------------------------------------- */}
          
          {/* show and hide div section */}
          {this.state.show ?
          <div className="header" id="demo">
          <div className="content container">
          <div className="row container ">

            <div className="col-sm-6 col-md-6 col-lg-6 content-left">
                <img src={Img2} className="res-img" width="400" alt="blog"/>
              
            </div>
           
           <div className="col-sm-6 col-md-6 col-lg-6 content-right">
             {/* form section */}
               <form onSubmit={this.submitForm}>
               <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"><b>Titles</b></label>
                <input 
                type="text"
                name="title" 
                class="form-control" 
                id="exampleFormControlInput1" 
                placeholder="enter your title"
                value={this.state.title}
                onChange={this.handleChange}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"><b>Express Anythings </b></label>
                <textarea 
                name="body"
                class="form-control" 
                id="exampleFormControlTextarea1" 
                placeholder="write somethings (Jocks,Motivations,Stories and More)" 
                rows="3"
                value={this.state.body}
                onChange={this.handleChange}
                ></textarea>
              </div>
              <button type="submit" class="btn btn-secondary"  >Submit Post</button>
              <button type="submit" class="btn btn-secondary" style={{marginLeft:'5px'}}  ><a href="#content"
              style={{color:'#fff',textDecoration:'none'}}>Go To Posts</a></button>
              <p
              style={{padding:'10px 0',color:'green',fontWeight:'bold'}} 
              id="success"></p>
              <p
              style={{padding:'10px 0',color:'red',fontWeight:'bold'}} 
              id="failed"></p>
           </form>
           {/* ------------------------------------------ */}
           </div>
          </div>
          </div>
         {/* shape divider */}
         <div class="custom-shape-divider-bottom-1613638069">
           <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
           <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
           </svg>
        </div>
      </div>
      

          :null}
          {/* ---------------------------- */}


          {/* main section of home */}
          <div className="section" id="content">
            
              <div className="container-dianamic">
              <div style={{position:'relative'}}>
          <button className="button-float">Posts</button><span>Good Evening World,Have a Good Day:)</span>
          <div className="height-content"></div>
          </div>
                <div className="post-contents" >
                  {this.displayBlogPost(this.state.posts)}
                </div>
              </div>
               
          </div>
         
           </>
       )
   }

}
export default Journal;