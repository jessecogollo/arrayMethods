'use strict';

const request = require('request');

const getData = () => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      json: true,
      url: 'http://api.meetup.com/medellinjs/events?status=past'
    };
    request(options, (error, response, body) => {
      if (error) return reject(error);
      return resolve(body);
    });
  });
};

module.exports = {
  getData
};
