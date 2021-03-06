import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import CreateNewChatReducers from './CreateNewChatReducers';
import ChatListReducers from './ChatListReducers';
import ChatBoxReducers from './ChatBoxReducers';

export default combineReducers({
    auth: AuthReducers,
    newChat: CreateNewChatReducers,
    chatList: ChatListReducers,
    chatBox: ChatBoxReducers
});
