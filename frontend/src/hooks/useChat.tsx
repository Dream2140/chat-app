import {useEffect} from 'react';
import {socketService} from "../services/socketService";
import {MessageDto} from "../types/messageDto";
import {useDispatch} from "react-redux";
import {addMessage} from "../store/message/actions";
import {UserDto} from "../types/userDto";
import {addUserList} from "../store/user/actions";

export const useChat = () => {

};
