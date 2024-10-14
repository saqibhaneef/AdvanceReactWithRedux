import React , {Component} from 'react'
import { connect } from 'react-redux';


export default (ChildComponent) => {
    class ComposedComponent extends Component{

        //Component just rendered
    componentDidMount(){
        this.shouldNavigateAway();
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

        render(){
            return <ChildComponent {...this.props}/>
        }
    }

    function mapStateToProps(state){
        return {auth: state.auth};
    }

    return connect(mapStateToProps)(ComposedComponent);
}
