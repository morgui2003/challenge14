class Message {
    constructor(user, content) {
        this.user = user;
        this.content = content;
    }

    display(current) {
        let className = "";
        if (this.user === current) {
            className = "from-me";
        } else {
            className = "from-them";
        }
        const html = `<div>
        <span class="${className}">${this.user.name}</span>
        <p class="${className}">${this.content}</p>
      </div>`
        document.querySelector(".conversation").insertAdjacentHTML("beforeend", html);
        return this;

    }
}

export default Message;