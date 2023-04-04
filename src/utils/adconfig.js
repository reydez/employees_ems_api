require("dotenv").config();
const { AD_URL, AD_BASEDN, AD_USERNAME, AD_PASSWORD } = process.env;

 const config = {
    url: AD_URL,
    baseDN: AD_BASEDN,
    username: AD_USERNAME,
    password: AD_PASSWORD,
};

module.exports = config