import Conversation from "./Conversation.js";
import Message from "./Message.js";
class User {
    constructor(name) {
        this.name = name
    }

    sendMessage(conversion, content, current) {
        if (conversion.users.includes(this)) {
            const message = new Message(this, content);
            conversion.messages.push(message);
            message.display(current);
        } else {
            throw new Error("pas bon l'ami")
        }
        return this;
    }

};

export default User