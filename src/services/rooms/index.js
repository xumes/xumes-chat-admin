const Rooms = require('./../../schemas/rooms')

module.exports = (req, res) => {
  Rooms
    .find()
    .then((rooms) => {
      return res.render('rooms/index', {
        title: 'Rooms - Xumeschat Admin',
        user_logged: req.user,
        rooms: rooms
      });
    })
    .catch((error) => {
      return res.send('Error: ' + error)
    })
}
