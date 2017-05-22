const Users = require('./../../schemas/users')

module.exports = (req, res) => {
  Users
    .findByIdAndRemove(req.params.id)
    .then((users) => {
      return res.redirect("/users")
    })
    .catch((error) => {
      return res.send("Error: " + error)
    })
}
