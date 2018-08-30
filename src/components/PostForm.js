import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

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

    this.props.createPost(post);
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

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
}

export default connect(null, { createPost })(PostForm)
