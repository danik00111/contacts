import { combineReducers, createStore } from "redux";
import { contactReducer, filterReducer } from './reducers'



// case 'addcontact':
//   const takenids = state.contacts.map(x=>x.id);
//   let newid=1;
//   while(true) { if(!takenids.includes(newid)) break; newid++ }
//   const newcontact = { ...action.payload, id:newid }
//   return { contacts: [ ...state.contacts, newcontact ], filter: state.filter }

// break; case 'delcontact':
//   const newcontacts = state.contacts.filter(x=>x.id != action.payload);
//   return { contacts: newcontacts, filter: state.filter }


// break; case 'setfilter':
// return { contacts: state.contacts, filter: action.payload }

// break;

const rootReducer = combineReducers({
  cont: contactReducer,
  fil: filterReducer
})

export const store = createStore(rootReducer);