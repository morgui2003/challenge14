import User from "./User.js";
class Conversation {
    constructor() {
        this.messages = [];
        this.users = [];
    }

    addUsers(users) {
        users.forEach((user) => {
            if (user instanceof User && !this.users.includes(user)) {
                console.log(`Added user ${user.name} to conversation`);
                this.users.push(user);
            } else {
                throw new Error("tu peux pas");
            }
        });
        return this;
    }
}
export default Conversation;