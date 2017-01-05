module.exports = {
  index: function (req, res, next){
    res.status(200).json(req.session.cart);
  },
  create: function(req, res, next){
    if(!req.session.cart){
      req.session.cart = [];
    }
    req.session.cart.push(req.body);
    res.status(200).json(req.session.cart);
  }
}