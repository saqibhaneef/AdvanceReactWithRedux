import React, { Component } from "react"
import { connect } from "react-redux"

class CommentList extends Component{

    renderComments(){
        return this.props.comments.map((comment,index)=>{
            return <li key={comment}>{comment}</li>
        });
    }

    render(){
       return( <div>
        <div>Comment List</div>
        <ul>
        {this.renderComments()}
        </ul>        
    </div>
       )
    }
}
const mapStateToProps = (state) => {
    return {comments: state.comments};
}

export default connect(mapStateToProps)(CommentList);

// const CommentList = ({commentsList}) => {

//     return (
//         <div>
//             <div>Comment List</div>
//             {commentsList && commentsList.length > 0 ? (
//                 <ul>
//                     {commentsList.map((comment,index) => (
//                         <li id={index}>{comment}</li>
//                     ))}
//                 </ul>
//             ) : (
//                 <div>No CoComment List</div>
//             )}
//         </div>
//     )
// }

