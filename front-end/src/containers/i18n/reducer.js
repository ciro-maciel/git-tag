import { I18n_CHANGE } from './types';

import { addLocaleData } from 'react-intl';

import pt from 'react-intl/locale-data/pt';
import en from 'react-intl/locale-data/en';
import pt_BR from './data/pt-BR';
import en_US from './data/en-US';

let dataMessages = {
  'pt': pt_BR,
  'pt-BR': pt_BR,
  'en-US': en_US,
};

addLocaleData([...en, ...pt]);

const navigatorLocale =
    typeof window !== 'undefined'
      ? (navigator.languages && navigator.languages[0]) || navigator.language || navigator.usserLanguage || 'pt-BR'
      : 'pt-BR',
  cookieLocale =
    typeof window !== 'undefined'
      ? decodeURIComponent(
          document.cookie.replace(
            new RegExp(
              '(?:(?:^|.*;)\\s*' + encodeURIComponent('locale').replace(/[\\]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'
            ),
            '$1'
          )
        ) || null
      : null;

let locale = cookieLocale ? cookieLocale : navigatorLocale,
  messages = flattenMessages(dataMessages[locale]);

let initialState = {
  locale,
  messages,
};
saveInCookie(locale);

function saveInCookie(locale) {
  const validAt = new Date().setDate(new Date().getDate() + 360),
    domain =
      typeof window !== 'undefined'
        ? window.location.hostname === 'localhost'
          ? 'localhost'
          : '@ciro-maciel'
        : '@ciro-maciel',
    path = '/';

  if (typeof window !== 'undefined') {
    document.cookie =
      encodeURIComponent('locale') +
      '=' +
      encodeURIComponent(locale) +
      '; expires=' +
      validAt +
      (domain ? '; domain=' + domain : '') +
      (path ? '; path=' + path : '');
  }
}

// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide
function flattenMessages(nestedMessages, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    let value = nestedMessages[key];
    let prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
}

export default function I18n(state = initialState, action) {
  switch (action.type) {
    case I18n_CHANGE: {
      var locale = action.payload;
      saveInCookie(locale);
      return {
        ...state,
        locale,
        messages: flattenMessages(dataMessages[locale]),
      };
    }
    default:
      return state;
  }
}
