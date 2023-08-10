export enum WEBSOCKET_EVENTS {
    POST_MESSAGE = 'message:add',
    GET_MESSAGE = 'message:get-message',
    GET_USER_LIST = 'user:user_list',
    INIT_NEW_USER = 'user:init',
    INITED_NEW_USER ='user:new_user_inited',
    CHANGE_USER_STATUS = 'user:change_online_status',
    LOAD_MESSAGE_LIST_REQUEST = 'message:load_message_list_request',
    LOAD_MESSAGE_LIST_RESPONSE = 'message:load_message_list_response',
}