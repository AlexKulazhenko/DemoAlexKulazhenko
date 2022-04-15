import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import { Posts } from './components/Posts';

class App extends Component{
  state ={
      posts: [
        {id: 'abc', name: 'JS'},
        {id: 'abc1', name: 'React'},
        {id: 'abc2', name: 'Angular'}
      ]
  }

  handleClick = () => {
    console.log('Updeted state')
  }

  deletePost = (id) => {
      this.setState({posts: this.state.posts.filter(post => post.id !== id)})
  }

  render(){
    const {posts} = this.state
    return (
     
      <div style={{textAlign: 'center'}}>
        <Posts posts={posts} deletePost={this.deletePost}/>
      </div>
    );
  } 
}

export default App;
