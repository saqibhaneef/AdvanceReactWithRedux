import React from "react";
import App from "../App";
import {shallow} from 'enzyme'
import CommentBox from "../CommentBox";


describe("MyComponent", () => {

    it('shows a comment box', () => {

        const wrapped = shallow(<App></App>);
        expect(wrapped.find(CommentBox).length).toEqual(9)
    })

});