import { getMessages, getMembers } from './data';

export function getChatLog() {
  console.log("mmmmmmmmmm");
  
  return {
    type: 'MESSAGES_LOADING',
    payload: getMessages()
  };
}

export function getMembersDetails() {
  console.log("rrrrrrrrr");
  return {
    type: 'GET_MEMBERS',
    payload: getMembers()
  };
}

// export function getViews() {
//   return dispatch => {

//         services.getViews()
//               .then(productData => {
//                     dispatch(successViews(productData), console.log("called in action", productData))
//               }
//               )
//               .catch(e => {
//                     dispatch(failViews(e.message))
//                     console.log(e.message)
//               })
//   }
// }