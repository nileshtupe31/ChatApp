import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import CreateNewChatReducers from './CreateNewChatReducers';

export default combineReducers({
    auth: AuthReducers,
    newChat: CreateNewChatReducers
});
