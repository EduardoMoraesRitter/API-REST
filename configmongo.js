let env = process.env.NODE_ENV || 'development';
let mongoConfig = {
    'development': 'mongodb+srv://wrteste:d2BS7vl6uGASfHkR@cluster0-mamro.mongodb.net/test?retryWrites=true&w=majority',
    'homolog': 'mongodb://localhost:27017/hml',
    'production': 'mongodb://localhost:27017/prd'
};
module.exports = mongoConfig[env];