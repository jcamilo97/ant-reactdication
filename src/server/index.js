//dev
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';
import exphb from 'express-handlebars';
 
//webpack Configuration
import  webpackConfig  from '../../webpack.config.babel';

//Helpers
import * as hbsHelpers from '../lib/handlebars';

//server Port 
const port = process.env.PORT | 3000;

//Enveiroment
const isDevelopment = process.env.NODE_ENV !== 'production';

//Express app
const app = express();

//Public
app.use(express.static(path.join(__dirname, './../public')));

//webpack Compiler
const webpackCompiler = webpack(webpackConfig);

//webpack middleware
if(isDevelopment){
    app.use(webpackDevMiddleware(webpackCompiler));
    app.use(webpackHotMiddleware(webpackCompiler));
}

// Sending all traffic to React
app.get('*',(req,res) =>{
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//Listen Port 
app.listen(port, err => {
    if(!err){
        open(`http://localhost:${port}`);
    }
});
