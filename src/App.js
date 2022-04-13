import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import './App.css';



class App extends Component{
  state ={
      posts: [],
      loading: true,
      comments: []
  }

  

  componentDidMount(){
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({posts: data, loading: false}))
      this.timerId = setInterval(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response=>response.json())
        .then(data=>this.setState({comments: data}))
      }, 3000)
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')  
  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }


  render(){
    return (
      <div style={{textAlign: 'center'}}>
        {this.state.loading ? <h3>Loading...</h3> : <h3>{this.state.posts.length} was loading</h3>}
      </div>
    );
  } 
}

export default App;
