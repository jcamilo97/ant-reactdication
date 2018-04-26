//dev
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';
import exphbs from 'express-handlebars';
import  config  from '../config';
 
//webpack Configuration
import  webpackConfig  from '../../webpack.config.babel';

//Helpers
import * as hbsHelper from '../lib/handlebars';

//utils
import { isMobile } from '../lib/utils/device';

//Enveiroment
const isDevelopment = process.env.NODE_ENV !== 'production';

//Express app
const app = express();

//Public
app.use(express.static(path.join(__dirname, './../public')));

// Handlebars setup
app.engine('.hbs', exphbs({
    extname:'.hbs',
    helpers: hbsHelper
}));

app.set('views', path.join(__dirname, './views'));
app.set('views engine', '.hbs');

//webpack Compiler
const webpackCompiler = webpack(webpackConfig);

//webpack middleware
if(isDevelopment){
    app.use(webpackDevMiddleware(webpackCompiler));
    app.use(webpackHotMiddleware(webpackCompiler));
}

// device detector
app.use((req, res, next) => {
    res.locals.isMobile = isMobile(req.headers['user-agent']);

    return next();
});
// Sending all traffic to React
app.get('*', (req, res) => {
    res.render('frontend/index.hbs', {
      layout: false
    });
  });
  

//Listen Port 
app.listen(config.serverPort, err => {
    if(!err){
        open(`${config.baseUrl}`);
    }
    else{
        console.log(err)
    }
});
