<h1 align="center" id="title">Chat App</h1>

Chat app based on socket.io. When you first visit the site a random username is generated and saved in Local Storage. In the online list users who are currently online and 4 bots are saved. 
- **Echo bot**: Any message is answered with the same message.

- **Reverse bot**: Replies to any message with the same message but upside down. Example: "abc" -> "vba". **THIS BOT HAS A 3 SECOND REPLY DELAY**

- **Spam bot**: Ignores everything you write to it. Once every 10-120 seconds (the value is random each time), it writes something to the chat.

- **Ignorebot**: He just ignores everything and doesn't write anything.

  
All functionality for communicating with the server is implemented using websockets.

<h2>🚀 Demo</h2>

<h2>Project Screenshots:</h2>

![Chat image](https://github.com/Dream2140/chat-app/raw/main/chat-app.png)


  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Real time chat
*   Bots with different behaviour
*   Messages are stored in the database

<h2>🛠️ Installation Steps:</h2>

<p>1. Install</p>

```
npm install
```

<p>2. Run app</p>

```
npm start
```

  
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   React
*   Typescript
*   Socke.io
*   Next.js
*   Express
*   mongoose
*   Sass
*   redux
