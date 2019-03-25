//GET Homepage
const index = (reg, res) => {
  res.render('index', { title: 'Express' });
};

module.exports = {
  index
};
