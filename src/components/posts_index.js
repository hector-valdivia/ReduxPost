import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends React.Component{
  componentDidMount(){
    console.log( this.props.posts );
  }
  
  render(){
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/post/new" className="btn btn-primary">Add a Post</Link>
        </div>
        Lista de bloooggsss
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostIndex);