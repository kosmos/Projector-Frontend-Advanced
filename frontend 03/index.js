var postcss = require('postcss');

var pluginMessage = 'Сайт створено з любов’ю до України :)';

module.exports = postcss.plugin('bndrplugin', function bndrplugin(options) {

    return function(css) {

        options = options || {};
        if (options.message) {
            pluginMessage = options.message;
        }

        css.append({ text:  pluginMessage })

    }

});
