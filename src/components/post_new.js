import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostNew extends React.Component{
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props){
    this.props.createPost(props)
      .then(() => {
        // blog post has been created, navigate the user to the index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/');
      });
  }
  
  render(){
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit( this.onSubmit.bind(this) )}>
        <h3>Create a new Post</h3>
        <div className={ `form-group ${ title.touched && title.invalid ? 'has-danger' : '' }` }>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            { title.touched ? title.error : '' }
          </div>
        </div>

        <div className={ `form-group ${ categories.touched && categories.invalid ? 'has-danger' : '' }` }>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          { categories.touched ? categories.error : '' }
        </div>

        <div className={ `form-group ${ content.touched && content.invalid ? 'has-danger' : '' }` }>
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
          { content.touched ? content.error : '' }
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancelar</Link>
      </form>
    );
  }
}

function validate(values){
  const errors = {};

  if ( !values.title ){
    errors.title = 'Enter a Title';
  }

  if ( !values.categories ){
    errors.categories = 'Enter a categories';
  }

  if ( !values.content ){
    errors.content = 'Enter a content';
  }

  return errors;
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reducForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({ 
  form: 'PostNewForm',
  fields: ['title','categories','content'],
  validate
 }, null, { createPost } )(PostNew);