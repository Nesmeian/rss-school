let socket: WebSocket | null = null;

export function connectServer(): { getSocket: () => WebSocket } {
  socket = new WebSocket("ws://127.0.0.1:4000");
  if (socket instanceof WebSocket) {
    return {
      getSocket: () => socket,
    };
  }
}

export function login(username: string): void {
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    console.error("WebSocket connection is not established or is not open.");
    return;
  }

  socket.send(username);

  socket.onmessage = (event) => {
    const form = document.querySelector(".auth__form");
    const message = JSON.parse(event.data);
    if (!message.payload.error) {
      form?.classList.add("auth__form--remove");
      setInterval(() => {
        form?.remove();
      }, 2000);
    } else {
      alert(message.payload.error);
    }
  };
}
