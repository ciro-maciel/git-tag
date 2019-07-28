import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import { i18nChange } from './actions';

class i18nProvider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      i18n: { locale, messages },
      children,
    } = this.props;
    return (
      // https://github.com/yahoo/react-intl/issues/213
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    );
  }
}
export const I18nProvider = connect((state) => ({ i18n: state.i18n }))(i18nProvider);

class i18nOption extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      i18n: { locale },
      handleChange,
    } = this.props;
    return (
      <select onChange={(e) => handleChange(e.target.value)} value={locale}>
        <option value="en-US">English (US)</option>
        <option value="pt-BR">Português (Brasil)</option>
      </select>
    );
  }
}
export const I18nOption = connect(
  (state) => ({ i18n: state.i18n }),
  (dispatch) => ({
    handleChange: (locale) => dispatch(i18nChange(locale)),
  })
)(i18nOption);
