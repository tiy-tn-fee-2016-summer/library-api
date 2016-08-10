module.exports = {
  type: 'author',

  serializer: {
    attributes: [
      'title',
      'year',
      'is_digital',
      'author_id',
    ],

    works: Object.assign({}, require('./Book').serializer, { ref: 'id', included: false }),
  },
};
