module.exports = (req, res, next) => {
  req
    .checkBody('name', 'Field name is required')
    .notEmpty()
  req
    .checkBody('email', 'Field email is required')
    .notEmpty()
    .isEmail()

    let errors = req.validationErrors()

    if (!errors) {
      return next()
    }

    return res.redirect('/users/new')
}
