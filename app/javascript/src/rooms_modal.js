const focusTitle = () => {
  $('#titleInput').focus()
}

const clearForm = (event) => {
  $(event.target).find('input').val("")
  $('#createRoomModal').modal('hide')
}

$(document).on('turbolinks:load', function() {
  const modal = $('#createRoomModal')
  modal.on('shown.bs.modal', focusTitle)
  modal.on('ajax:success', clearForm)
})