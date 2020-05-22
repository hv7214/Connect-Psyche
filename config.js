module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'Gibberish, jibberish, jibber-jabber and gobbledygook',
  DB_CONNECTION: process.env.DB_CONNECTION || 'abcd:test123@ds049661.mlab.com:49661/connectpsyche',
  DB_COLLECTION: process.env.DB_COLLECTION || 'results',
  URL: process.env.URL || 'http://localhost:3000'
}
