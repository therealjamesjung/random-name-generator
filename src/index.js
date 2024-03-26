const data = require("./data.json");

function generateRandomNickName() {
  const { colors, foods } = data;
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomFood = foods[Math.floor(Math.random() * foods.length)];
  return `${randomColor} ${randomFood}`;
}

module.exports = generateRandomNickName;
