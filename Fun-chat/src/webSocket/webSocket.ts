export class WebSocketConnection {
  private socket: WebSocket;

  constructor(url: string) {
    this.socket = new WebSocket(url);
    this.initEventHandlers();
  }

  private initEventHandlers() {
    this.socket.onopen = () => {
      console.log("WebSocket connection opened");
      // Additional logic upon connection open
    };

    this.socket.onmessage = (event) => {
      console.log("Message received:", event.data);
      // Handle incoming messages
    };

    this.socket.onclose = () => {
      console.log("WebSocket connection closed");
      // Handle connection close
    };

    this.socket.onerror = (event) => {
      console.error("WebSocket error:", event);
      // Handle connection errors
    };
  }

  public send(message: string): void {
    this.socket.send(message);
  }
}
