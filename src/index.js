var teams = [
    '巴西',
    '法国',
    '德国',
    '英格兰',
  ];
  
  module.exports = {
    all: function () {
      return teams;
    },
    champion: function () {
      const i = Math.ceil(Math.random() * teams.length)
      return teams[i];
    }
  }