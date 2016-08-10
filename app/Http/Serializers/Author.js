module.exports = {
  type: 'author',

  serializer: {
    attributes: ['first_name', 'last_name', 'works'],

    works: Object.assign({}, require('./Book').serializer, { ref: 'id', included: false }),
  },
};
