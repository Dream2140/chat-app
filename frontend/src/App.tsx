import React, {useEffect} from "react";
import {Header} from "./components/Header";
import {Chat} from "./components/Chat";
import {useDispatch} from "react-redux";
import {socketService} from "./services/socketService";
import {MessageDto} from "./types/messageDto";
import {addMessage, addMessageList} from "./store/message/actions";
import {UserDto} from "./types/userDto";
import {addUserList, resetUserList} from "./store/user/actions";
import {USER_LOCALSTORAGE_KEY} from "./constants/userConstants";
import {setCurrentUser} from "./store/chat/actions";


const App: React.FC = () => {

    const dispatch = useDispatch();


    useEffect(() => {
        socketService.subscribeToMessages((message: MessageDto) => {
            dispatch(addMessage(message));
        });

        socketService.subscribeToUserList((userList: UserDto[]) => {
            dispatch(resetUserList());
            dispatch(addUserList(userList));
        });

        socketService.subscribeToNewUser((userData: UserDto) => {
            const newUserData = JSON.stringify(userData);
            localStorage.setItem(USER_LOCALSTORAGE_KEY, newUserData);
            dispatch(setCurrentUser(userData));
            console.log('Your user data:', userData);
        })

        socketService.subscribeToGetMessageListListener((messageList: MessageDto[]) => {
            dispatch(addMessageList(messageList));
        });


    }, []);

    useEffect(() => {
        const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (!userData) {
            socketService.emitNewUser();
        } else {
            const user = JSON.parse(userData);
            const userId = user._id;

            dispatch(setCurrentUser(user));
            socketService.changeOnlineStatus(userId, true);
            console.log('Your user data:', userData)
        }
    }, []);


    return (
        <div className="app">
            <Header/>
            <Chat/>

        </div>
    );
};

export default App;
