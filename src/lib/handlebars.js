import { minify } from 'html-minifer';

export function compress(content){
    return minify(content.fn(this), {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true
    });
}