const dotenv = require('dotenv');

const env = dotenv.config({
    path: 'DATA.env'
}).parsed;

if(!env) {
    throw new Error("File \'DATA.env\' doesn't exist");
}

Object.entries(env).forEach(([key, value]) => {
    (process.env as any)[key] = value
})