var request = require('request');
var parseString = require('xml2js').parseString;

request('https://www.dealabs.com/rss/tout', function (error, response, body) {
    parseString(body, function (err, result) {
        Object.keys(result.rss.channel[0].item).forEach(function(key) {
            var deal = '<div class="jumbotron">\n' +
                '      <h1 class="display-4">'+result.rss.channel[0].item[key]["title"]+'</h1>\n' +
                '      <p class="lead">'+result.rss.channel[0].item[key]["description"]+'</p>\n' +
                '      <hr class="my-4">\n' +
                '      <a class="btn btn-primary btn-lg" target="_blank" href="'+result.rss.channel[0].item[key]["link"]+'" role="button">Lien</a>\n' +
                '    </div>'
            document.getElementById("content").innerHTML += deal
        });
    });
});
