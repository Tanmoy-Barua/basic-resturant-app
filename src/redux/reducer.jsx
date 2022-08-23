import Dishes from '../data/dishes';

function ObjectLength ( object ) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
};

const initialState = {
    dishes: Dishes,
}



export const Reducer = (state = initialState, action) => {
    // console.log(action);
    let count = 0;
    let Dishid = 0;
    let commentData = '';
    if(action.type === 'ADDCOMMENT'){

        state.dishes.map(dish => dish.comments.map(dishcomment => {
            count = ObjectLength(dishcomment)
        }));

        let comment = action.payload;

        comment.id = count + 1;
        Dishid = comment.dishid;
        comment.date = new Date().toDateString();

        
        // console.log(comment);
        const filter = state.dishes.filter((dishid)=>{
            return dishid.id === comment.dishid;
        })
        commentData = filter.map(dish => dish.comments.map(dishcomment => {
            return dishcomment
        }));
        // console.log(filter);
        console.log(commentData[Dishid].concat(comment))
        // const commentUpdate = filter.map(filterdish => filterdish.comments.map(updatecomment => updatecomment))
        
        delete comment.dishid; 
        // console.log(commentUpdate.concat(comment));
        
        return {
            ...state,
            dishes: commentData[Dishid].concat(comment)
        }
    }
    return state;
}
