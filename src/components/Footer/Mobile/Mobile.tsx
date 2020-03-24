import React, { Fragment } from 'react'

import { GROUPS_LINKS } from '../const'
import {
  Wrapper,
  Header,
  Description,
  EmailInput,
  SubscribeButton,
  Links,
  Group,
  GroupTitle,
  Link,
  NewLine,
  Copyright,
} from './style'

interface ILink {
  value: string
  label: string
  newLine?: boolean
}

const currentYear = (new Date()).getFullYear()
const Mobile = () => {
  return (
    <Wrapper>
      <Header>Subscribe to the EDUBAO Newsletter</Header>
      <Description>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia
      </Description>
      <EmailInput placeholder='max@mustermensch.com' />
      <SubscribeButton block={true}>Subscribe</SubscribeButton>
      <Links>
        {GROUPS_LINKS.map(({ title, links = [], isText = false }) => (
          <Group key={title}>
            <GroupTitle>{title}</GroupTitle>
            {links.map((linkItem: ILink) => {
              const { value, label, newLine = false } = linkItem
              return (
                <Fragment key={label}>
                  <Link isText={isText} href={value}>{label}</Link>
                  {newLine && <NewLine />}
                </Fragment>
              )
            })}
          </Group>
        ))}
      </Links>
      <Copyright>© {currentYear} EDUBAO GmbH. All rights reserved.</Copyright>
    </Wrapper>
  )
}

export default Mobile
