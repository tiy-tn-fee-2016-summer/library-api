module.exports = {
  type: 'author',

  serializer: {
    attributes: ['first_name', 'last_name', 'works'],

    works: Object.assign({}, { ref: 'id', included: false }),
  },
};
