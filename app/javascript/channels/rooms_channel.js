import consumer from "./consumer"

const roomsChannel = consumer.subscriptions.create("RoomsChannel", {
  connected() {
    console.log('connected to the rooms channel')
  },

  disconnected() {
    console.log('disconnected')
  },

  received(data) {
    $(data.template).insertBefore('#createRoomButton')
  }
});

export default roomsChannel;