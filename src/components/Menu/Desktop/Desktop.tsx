import React, { useEffect } from 'react'
import { Popover, Icon } from 'antd'
import { get } from 'lodash'
import { HEADER, MENU, LANGUAGES } from '../const'
import { useLanguage } from 'hooks'
import { fetchMock } from '../apiMock'
import {
  Wrapper,
  Header,
  HeaderItem,
  Bar,
  Logo,
  Menu,
  Item,
  SubMenu,
  SubItem,
  Link,
  GetApp,
  Underline,
} from './style'

const LanguageChildren = LANGUAGES.map(({ label, value }) => ({
  label,
  value,
}))

const Desktop = () => {
  const {
    language,
    switchLang,
    updateLanguageData,
    // languageData
  } = useLanguage()

  useEffect(() => {
    const fetchLanguageData = async () => {
      const data = await fetchMock(language)
      updateLanguageData(data)
    }

    fetchLanguageData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])

  // console.log({ languageData })

  const LanguageMenuComponent = () => {
    const content = (
      <SubMenu>
        {LanguageChildren.map((languageItem) => (
          <SubItem key={get(languageItem, 'value')}>
            <Link
              // tslint:disable-next-line: jsx-no-lambda
              onClick={() => switchLang(get(languageItem, 'value'))}
            >
              {get(languageItem, 'label')}
            </Link>
          </SubItem>
        ))}
      </SubMenu>
    )

    return (
      <Popover overlayClassName='sub-menu' placement='bottom' content={content}>
        <Item>
          <Underline>{get(language, 'label')}</Underline>
          {}
          <Icon type='down' />
        </Item>
      </Popover>
    )
  }

  return (
    <Wrapper>
      <Header>
        {HEADER.map(({ label, value }) => (
          <HeaderItem key={value} href={value} rel='noopener noreferrer'>
            {label}
          </HeaderItem>
        ))}
      </Header>
      <Bar>
        <Logo href='/' />
        <Menu>
          {MENU.map(({ label, children = [] }) => {
            const content = (
              <SubMenu>
                {children.map(({ label: subLabel, value }) => (
                  <SubItem key={value}>
                    <Link href={value} rel='noopener noreferrer'>
                      {subLabel}
                    </Link>
                  </SubItem>
                ))}
              </SubMenu>
            )

            return (
              <Popover
                key={label}
                overlayClassName='sub-menu'
                placement='bottom'
                content={content}
              >
                <Item>{label}</Item>
              </Popover>
            )
          })}
          <GetApp type='primary'>Get the App!</GetApp>
          {LanguageMenuComponent()}
        </Menu>
      </Bar>
    </Wrapper>
  )
}

export default Desktop
