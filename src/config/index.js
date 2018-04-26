export default {
    serverPort:  process.env.PORT || 3000,
    baseUrl: process.env.URL || "http://localhost:3000",
    views:{
        engine:'.hbs',
        extension: '.hbs',
        path: './views'
    }
};