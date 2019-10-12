let env = process.env.NODE_ENV || 'development';
let mongoConfig = {
    'development': process.env.CON,
    'homolog': 'mongodb://localhost:27017/hml',
    'production': 'mongodb://localhost:27017/prd'
};
module.exports = mongoConfig[env];