import { ADD_CARD } from '../../constants';

export default  function reminders  (state = [], action)  {
    let reminders = null;
   switch (action.type) {
       case ADD_CARD:
           console.log("yeni card eklendi".reminders);
           return reminders;   
       default:
           return state ;
   }
}

