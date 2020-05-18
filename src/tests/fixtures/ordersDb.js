const faker = require('faker');

const finalCount = (figureCount, promoCode) => {
  let figurePrice;
  if (figureCount > 50) {
    figurePrice = figureCount * 9;
  } else {
    figurePrice = figureCount * 15;
  }
  if (promoCode === 'MiNi Familly Pack') {
    figurePrice = (figurePrice * 0.8).toFixed(2);
  }
  return figurePrice;
};

const orderOne = {
  email: '',
  figureCount: faker.random.number(100),
  promoCode: 'MiNi Familly Pack',
  figurePrice: '',
};

orderOne.figurePrice = finalCount(orderOne.figureCount, orderOne.promoCode);

const orderTwo = {
  email: '',
  figureCount: faker.random.number(100),
};

orderTwo.figurePrice = finalCount(orderOne.figureCount, orderOne.promoCode);

const newOrder = {
  email: '',
  figureCount: faker.random.number(100).toString(),
  promoCode: 'MiNi Familly Pack',
};

const randomOrder = {
  id: faker.random.alphaNumeric(24),
};

module.exports = {
  orderOne,
  orderTwo,
  newOrder,
  randomOrder,
};
