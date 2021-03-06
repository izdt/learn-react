import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

fs.readFile('src/index.html', 'utf8', (err,markup) => {
    if(err){
        return console.log(err);
    }

    const $ = cheerio.load(markup);

    $('head').prepend('\r\n\t<link rel="stylesheet" href="styles.css">');

    fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
        if(err){
            return console.log(err);
        }
        console.log('index.html generated to /dist'.green);
    });
});