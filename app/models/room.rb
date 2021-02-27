class Room < ApplicationRecord
  after_create :broadcast_room

  def broadcast_room
    template = ApplicationController.render(partial: 'rooms/room', locals: { room: self })
    ActionCable.server.broadcast("rooms_channel", template: template)
  end
end
