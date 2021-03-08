import consumer from "./consumer"

const lobbyChannel = consumer.subscriptions.create("LobbyChannel", {
  connected() {
    console.log('connected to the lobby channel')
  },

  disconnected() {
    console.log('disconnected')
  },

  received(data) {
    $(data.template).insertBefore('#createRoomButton')
  }
});

export default lobbyChannel;