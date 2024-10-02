import React from "react";
import App from "Components/App";
import {shallow} from 'enzyme'
import CommentBox from "Components/CommentBox";
import CommentList from "Components/CommentList";


describe("App", () => {

    let wrapped;

    beforeEach(() => {
        wrapped = shallow(<App></App>);
    })

    it('shows a comment box', () => {
        expect(wrapped.find(CommentBox).length).toEqual(1)
    })


    it('shows comment list', () => {
        expect(wrapped.find(CommentList).length).toEqual(1)
    })

});