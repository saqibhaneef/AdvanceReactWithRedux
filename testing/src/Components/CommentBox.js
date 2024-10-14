import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'


class CommentBox extends Component{

    state = {comment: ''}

    //Component just rendered
    componentDidMount(){

    }

    componentDidUpdate(){
        this.shouldNavigateAway();
    }

    shouldNavigateAway(){
        if(!this.props.auth){
            console.log("leave");
            debugger
            this.props.history.push('/');
        }
    }

    handleChange = (event) =>{
        this.setState({comment: event.target.value})
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        this.props.saveComment(this.state.comment)

        this.setState({comment:''})
    }
    

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment}></textarea>
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button onClick={this.props.fetchComments} className='fetch-comments'>Fetch Comments</button>
            </div>            
        )
    }
}

function mapStateToProps(state){
    return {auth: state.auth};
}

export default connect(mapStateToProps,actions)(CommentBox);

