//Get 'Home' page
const homelist = (req, res) => {
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: [{
      name: 'Starcups',
      address: '1234 Alabama Ave',
      rating: 3,
      facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
      distance: '200m'
    },{
      name: 'Cafe Hero',
      address: '5233 Florida Ave',
      rating: 5,
      facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
      distance: '260m'
    },{
      name: 'Burger Queen',
      address: '8932 California Ave',
      rating: 2,
      facilities: ['Food', 'Premium Wifi'],
      distance: '100m'
    }]
  });
};

//Get 'location Info' page
const locationInfo = (req, res) => {
  res.render('location-info', { title: 'Location Info' });
};

//Get 'Add Review' page
const addReview = (req, res) => {
  res.render('location-review-form', { title: 'Add Review' });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};
