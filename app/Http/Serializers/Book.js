module.exports = {
  type: 'book',

  serializer: {
    attributes: [
      'title',
      'year',
      'is_digital',
      'author',
    ],

    author: Object.assign({}, { ref: 'id', included: false }),
  },
};
