const redis = require('redis');
const client = redis.createClient();

exports.set = async (key, value) => {
    await client.set(key, value);
};

exports.get = async (key) => {
    return await client.get(key);
};
