import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { translate } from 'react-i18next'

const languageOptions = [{
  key: 'zh-TW',
  text: '繁體中文',
  value: 'zh-TW',
},
{
  key: 'en',
  text: 'English',
  value: 'en',
}]

const I18N = ({ t, i18n }) => (
  <div>
    <p>{t('introduce')}</p>
    <Dropdown
      button
      className="icon"
      floating
      labeled
      icon="world"
      search
      onChange={(event, data) => {
      i18n.changeLanguage(data.value)
    }}
      options={languageOptions}
      text={t('lang')}
    />
  </div>
)

export default translate()(I18N)
