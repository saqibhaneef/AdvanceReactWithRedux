import requireAuth from "./requireAuth";
import React , { Component } from "react";

class Feature extends Component{

    render(){
        return <div>
            This is feature
        </div>
    }
}

export default requireAuth(Feature);