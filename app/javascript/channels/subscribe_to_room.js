import consumer from "./consumer"

const subscribeToRoom = function(id) {
  return consumer.subscriptions.create({ channel: 'RoomChannel', id: id }, {
    connected() {
      console.log(`connected to the channel for room ${id}`)
    },

    disconnected() {
      console.log('disconnected')
    },

    received(data) {
      console.log(data)
    }
  })
}

export default subscribeToRoom;