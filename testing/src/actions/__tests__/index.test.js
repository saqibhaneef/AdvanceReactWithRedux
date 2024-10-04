import { SAVE_COMMENT } from "actions/types";
import { saveComment } from "actions";


describe('SAVE_COMMENT',() => {

    it('has correct type',()=>{

        const newState = saveComment()
    
        expect(newState.type).toEqual(SAVE_COMMENT)
    
    })

    it('has correct payload',()=>{

        
        const newState = saveComment('New Comment')
    
        expect(newState.payload).toEqual('New Comment')
    
    })
    
})


