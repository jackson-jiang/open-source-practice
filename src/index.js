var teams = [
    '巴西',
    '法国',
    '德国',
    '中国6',
    '英格兰',
  ];

  var obj = {
    all: function () {
      return teams;
    },
    champion: function () {
      const i = Math.ceil(Math.random() * teams.length)
      return teams[i];
    }
  }
  
  module.exports = obj;