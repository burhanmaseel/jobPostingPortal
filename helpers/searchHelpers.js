let search = queryModel => {
  let model = require("../models/" + queryModel);

  let findById = id => {
    model
      .findById(id)
      .then(data => {

      })
      .catch(err => err);
  };
};

module.exports = {
   search
}