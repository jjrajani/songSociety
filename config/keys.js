/* keys.js WILL COMMIT */
module.exports =
  process.env.NODE_ENV === 'production' ? require('./prod') : require('./dev');
