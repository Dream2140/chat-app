// import React, {useEffect, useMemo, useState} from "react";
// import {io, Socket} from "socket.io-client";
// import {User} from "./types/user";
// import {MessageDto} from "./types/messageDto";
// import {USER_LOCALSTORAGE_KEY} from "./constants/userConstants";
//
//
// const SOCKET_SERVER_URL = "http://localhost:5000"; // Replace with your backend URL
//
// const App: React.FC = () => {
//     const [socket, setSocket] = useState<Socket | null>(null);
//     const [user, setUser] = useState<User | null>(null);
//     const [users, setUsers] = useState<User[]>([]);
//     const [messages, setMessages] = useState<MessageDto[]>([]);
//     const [messageInput, setMessageInput] = useState<string>("");
//     let currentUser: any = {};
//     useEffect(() => {
//         // Connect to the Socket.io server
//         const socket = io(SOCKET_SERVER_URL);
//         setSocket(socket);
//
//         // Cleanup socket on component unmount
//         return () => {
//             socket.disconnect();
//         };
//     }, []);
//     const userDataFormLocalStorage = useMemo(() => {
//         const userData = localStorage.getItem('userData')
//         if (userData) {
//             console.log(userData)
//             const objectFromLocalStorage = JSON.parse(userData);
//             return objectFromLocalStorage._id;
//         }
//         console.log(2)
//         return null;
//     }, [])
//     const userDataFormLocalStorage = useMemo(() => {
//         const userData = localStorage.getItem('userData')
//         if (userData) {
//             console.log(userData)
//             const objectFromLocalStorage = JSON.parse(userData);
//             return objectFromLocalStorage._id;
//         }
//         console.log(2)
//         return null;
//     }, [])
//     useEffect(() => {
//
//         if (socket) {
//
//             socket.emit("user:init", userDataFormLocalStorage);
//
//             socket.on("user:new_user_connected", (data) => {
//                 console.log(data);
//                 const newUserData = JSON.stringify(data);
//                 localStorage.setItem(USER_LOCALSTORAGE_KEY, newUserData)
//             });
//
//
//             // // Handle user list updates
//             // socket.on("userList", (users: User[]) => {
//             //     setUsers(users);
//             // });
//             //
//             // // Handle new user connection
//             // socket.on("userConnected", (user: User) => {
//             //     setUsers((prevUsers) => [...prevUsers, user]);
//             // });
//             //
//             // // Handle user disconnection
//             // socket.on("userDisconnected", (user: User) => {
//             //     setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
//             // });
//             // socket.on("userData", (data: any) => {
//             //     console.log(data)
//             //     currentUser = {...data};
//             // });
//
//         }
//     }, [socket]);
//
//     const handleSendMessage = (event: React.FormEvent) => {
//         event.preventDefault();
//         if (socket && messageInput.trim() !== "") {
//             const messageData = {
//                 recipient: '64cbe7b53d392d5bee22b72d',
//                 text: messageInput,
//                 sender: userDataFormLocalStorage
//             };
//
//             socket.emit("message:add", messageData);
//
//             console.log('chatMessage')
//             setMessageInput("");
//         }
//     };
//
//     return (
//         <div className="App">
//             <div className="chat">
//                 <div className="chat-box">
//                     {messages && messages.map((message) => (
//                         <div key={message.id} className="message">
//                             <div className="message-sender">
//                                 <img src={message.user.avatar} alt={message.user.name}/>
//                                 <span>{message.user.name}</span>
//                             </div>
//                             <div className="message-content">{message.text}</div>
//                         </div>
//                     ))}
//                 </div>
//                 <form onSubmit={handleSendMessage} className="message-form">
//                     <input
//                         type="text"
//                         value={messageInput}
//                         onChange={(e) => setMessageInput(e.target.value)}
//                         placeholder="Type your message..."
//                     />
//                     <button type="submit">Send</button>
//                 </form>
//             </div>
//         </div>
//     );
// };
//
// export default App;
