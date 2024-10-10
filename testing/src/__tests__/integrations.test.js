import React from "react";
import {mount} from 'enzyme'
import Root from "Root";
import App from 'Components/App'
import moxios from 'moxios'

beforeEach(()=>{
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
        status: 200,
        response: [
            {
                name: 'Comment 1'
            },
            {
                name: 'Comment 2'
            }
        ]        
    });
})

afterEach(()=>{
    moxios.uninstall();
})

it('can fetch a list of comments and display them', () => {

    const wrapped = mount(
        <Root>
            <App></App>
        </Root>
    )

    wrapped.find('.fetch-comments').simulate('click');

    
    moxios.wait( () => {
        wrapped.update();        
        expect(wrapped.find('li').length).toEqual(2)
        done();
        wrapped.unmount();
    })
    
    // setTimeout(()=>{
    //     wrapped.update();
    //     console.log(wrapped.find('li').text());
    //     expect(wrapped.find('li').length).toEqual(2)
    //     done();
    //     wrapped.unmount();
    // },1000)    

})
