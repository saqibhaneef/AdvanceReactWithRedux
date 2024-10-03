import React from "react";
import { mount } from "enzyme";
import CommentBox from "Components/CommentBox";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "reducers";

let wrapped

beforeEach(() => {
    wrapped = mount(
        <Provider store={createStore(reducers, {})}>
            <CommentBox></CommentBox>
        </Provider>
    )
})

afterEach(() => {
    wrapped.unmount();
})

it('has a text area and controller', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
});

describe('the text area',() => {

    beforeEach(() => {
        wrapped.find('textarea').simulate('change',{ 
            target: { value: 'new comment' } 
        });

        wrapped.update();
    })

    it('has a text area that user can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment'); 
    });
    
    it('when form is submitted, text area gets emptied', () => {
                
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment'); 
        
        wrapped.find('form').simulate('submit')
        wrapped.update();
        
        expect(wrapped.find('textarea').prop('value')).toEqual(''); 
    });

})



