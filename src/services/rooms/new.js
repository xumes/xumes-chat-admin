const Rooms = require('./../../schemas/rooms')

module.exports = (req, res) => {
  let room = new Rooms()

  return res.render('rooms/create', {
    title: 'Rooms - Xumeschat Admin',
    user_logged: req.user,
    room: room
  })
}
