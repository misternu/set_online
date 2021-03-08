class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_#{params[:id]}_channel"
  end

  def unsubscribed

  end
end