import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends React.Component{
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={ `post/${post.id}` }>
            <span className="float-xs-right">{ post.categories }</span>
            <b>{ post.title }</b>
          </Link>
        </li>
      );
    });
  }

  render(){
    return(
      <div>
        <div className="float-xs-right">
          <Link to="/post/new" className="btn btn-primary">Add a Post</Link>
        </div>
        <h3>Posts</h3>  
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts.all };
}

export default connect( mapStateToProps, { fetchPosts })(PostIndex);