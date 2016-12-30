/* jshint node: true */
'use strict';

const BASE_URL = '//maps.googleapis.com/maps/api/js';

module.exports = {
  name: 'ember-cli-google-maps-script',
  contentFor: function(type, config) {
    if (type === 'head-footer' && config.environment !== 'test') {
      let configuration = config['google-maps-script'];
      let language = configuration.language;
      let libraries = configuration.libraries;
      let url = BASE_URL + '?key=' + configuration.key;

      if (language) {
        url += '&language=' + language;
      }

      if (libraries) {
        url += '&libraries=' + libraries;
      }

      return '<script src="' + url + '"></script>';
    }
  }
};
