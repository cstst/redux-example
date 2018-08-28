import React, { Component } from 'react'

class PostForm extends Component {
  state = {
    title: '',
    body: ''
  }

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>      
            <br />
            <input 
              type="text" 
              name="title" 
              value={title} 
              onChange={this.onChange} 
            />
          </div>
          <br />
          <div>
            <label>Body:</label>      
            <br />
            <textarea 
              name="body" 
              value={body} 
              onChange={this.onChange} 
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
