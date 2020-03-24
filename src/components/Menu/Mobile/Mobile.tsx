import React, {useState, useEffect, Fragment} from 'react'
import {Icon} from 'antd'
import {Button} from 'components'
import {HEADER, MENU, LANGUAGES} from '../const'
import { useLanguage } from 'hooks'
import { fetchMock } from '../apiMock'
import {
  Wrapper,
  Header,
  HeaderItem,
  Bar,
  LogoWrapper,
  Logo,
  Menu,
  Groups,
  Group,
  GroupTitle,
  Item,
  Languages,
  Country,
  Slash,
} from './style'

const LanguageChildren = LANGUAGES.map(({ label, value }) => ({
  label,
  value,
}))

const Mobile = () => {
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

  const [menuVisible, setMenuVisible] = useState<boolean>()
  const showMenu = () => setMenuVisible(true)
  const hideMenu = () => setMenuVisible(false)

  const onLanguageClicked = (selectedLanguage: string) => {
    if (selectedLanguage !== language) {
      switchLang(selectedLanguage)
    }

    hideMenu()
  }

  const renderLanguages = () => {
    const menus = LanguageChildren.map(({ label, value }, i: number) => (
      <Fragment key={value}>
        {i !== 0 && <Slash>/</Slash>}
        
        <Country onClick={
          // tslint:disable-next-line: jsx-no-lambda
          () => onLanguageClicked(value)
        }>
          {label}
        </Country>
      </Fragment>
    ))

    return menus
  }

  return (
    <Wrapper>
      <Header>
        {HEADER.map(({label, value}) => (
          <HeaderItem key={value} href={value} rel='noopener noreferrer'>
            {label}
          </HeaderItem>
        ))}
      </Header>
      <Bar>
        <LogoWrapper>
          <Logo href='/' />
          {menuVisible ? (
            <Icon onClick={hideMenu} type='close' />
          ) : (
            <Icon onClick={showMenu} type='menu' />
          )}
        </LogoWrapper>
        {menuVisible && (
          <Menu>
            <Groups>
              {MENU.map(({label, children = []}) => (
                <Group key={label}>
                  <GroupTitle>{label}</GroupTitle>
                  {children.map(({label: item, value}) => (
                    <Item key={value} href={value} onClick={hideMenu}>
                      {item}
                    </Item>
                  ))}
                </Group>
              ))}
            </Groups>
            <Languages>
              {renderLanguages()}              
            </Languages>
            <Button type='primary' block={true} onClick={hideMenu}>
              Get the App!
            </Button>
          </Menu>
        )}
      </Bar>
    </Wrapper>
  )
}

export default Mobile
