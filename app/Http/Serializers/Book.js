module.exports = {
  type: 'book',

  serializer: {
    attributes: [
      'title',
      'year',
      'is_digital',
      'author',
    ],

    author: Object.assign({}, require('./Author').serializer, { ref: 'id', included: false }),
  },
};
