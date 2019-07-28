import { I18n_CHANGE } from './types';

export function i18nChange(locale) {
  return {
    type: I18n_CHANGE,
    payload: locale,
  };
}
