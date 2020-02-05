/**
 * Defaults
 */
const DEFAULT_LANGUAGE = 'es_AR';

/**
 * Data
 */
const data = {
  es_AR: {
    'Ver más': 'Ver más',
    'Ver menos': 'Ver menos',
  },
  pt_BR: {
    'Ver más': 'Ver mais',
    'Ver menos': 'Ver menos',
  },
  es_MX: {
    'Ver más': 'Ver más',
    'Ver menos': 'Ver menos',
  },
  en_MX: {
    'Ver más': 'See more',
    'Ver menos': 'See less',
  },
};

/**
 * Dictionary
 */
class Dictionary {
  constructor(language = DEFAULT_LANGUAGE) {
    this.translation = data[language];
  }

  getTranslation(key) {
    return this.translation ? this.translation[key] : key;
  }
}

/**
 * Exports
 */
module.exports = Dictionary;
