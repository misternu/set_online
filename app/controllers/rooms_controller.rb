class RoomsController < ApplicationController
  def index
    @rooms = Room.all
    @room = Room.new
  end

  def create
    @room = Room.create(room_params)
  end

  def show
    @room = Room.find(params[:id])
  end

  private

  def room_params
    params.require(:room).permit(:title)
  end
end
