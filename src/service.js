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
