import {ADD_CARD } from '../../constants';

export const addCard = (text) => {
    const action = {
        type: ADD_CARD,
        text
    }
    console.log("actden gelen",action);
    return action;
        
}
