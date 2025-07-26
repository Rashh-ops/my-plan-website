// controllers/planController.js
const Plan = require('../models/Plan');

exports.getHome = (req, res) => {
  res.render('home');
};

exports.getPlanDetails = async (req, res) => {
  const type = req.params.type; // "free" or "paid"
  const isFree = type === 'free';

  const plan = await Plan.findOne({ isFree });

  if (!plan) return res.status(404).send('Plan not found');

  res.render('planDetails', { plan });
};
