export enum WEBSOCKET_EVENTS {
    SEND_MESSAGE = 'message:send_message',
    GET_USER_LIST = 'user:user_list',
    INIT_NEW_USER = 'user:init',
    CHANGE_USER_STATUS = 'user:change_online_status',
    LOAD_MESSAGE_LIST= 'message:load_message_list',
    SET_USER_IS_TYPING = 'user:set_user_typing',
    SET_USER_STOP_TYPING = 'user:user_stop_typing',
    BOT_MESSAGE = 'bot:message'
}