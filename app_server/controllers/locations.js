//Get 'Home' page
const homelist = (req, res) => {
  res.render('index', { title: 'Home'});
};

//Get 'location Info' page
const locationInfo = (req, res) => {
  res.render('index', { title: 'Location Info' });
};

//Get 'Add Review' page
const addReview = (req, res) => {
  res.render('index', { title: 'Add Review' });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};
