module.exports = (req, res) => {
  return res.render('main/index', {
    title: 'Xumes chat :: Admin',
    user_logged: req.user
  })
}
