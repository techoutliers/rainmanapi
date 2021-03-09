const fetch = require("node-fetch");

module.exports = async (ip) => {
  return fetch(
    `http://api.ipstack.com/${ip}?access_key=99b3121185ba32452d140a4e4dacdf3a`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
