
import React, {Component} from "react";
import { connect } from "react-redux";
import { Link, Route } from 'react-router-dom'
import CommentBox from "Components/CommentBox";
import CommentList from "Components/CommentList";
import * as actions from 'actions'


class App extends Component{

  renderHeader(){
    return(
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/post">Post</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    )
  }

  renderButton(){
    if (this.props.auth){
      return <button onClick={() => this.props.changeAuth(false) }>Sign Out</button>;
    }else{
      return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>;
    }
  }
  

  render(){
    return (
    <div>
      {this.renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
    )
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps,actions)(App);

// export default () => {
//   return (
//     <div>      
//       <Route path="/post" component={CommentBox} />
//       <Route path="/" exact component={CommentList} />
//     </div>
//   );
// };
