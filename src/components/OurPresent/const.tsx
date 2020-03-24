import React from 'react'
import present_orange from './images/present_orange.svg'
import styled from 'styled-components'

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: cetner;

  margin-left: auto;
  margin-right: auto;
`

const PresentComponent = () => {
  return (
    <ImageContainer>
      <img
        src={present_orange}
        alt='edubao present'
      />
    </ImageContainer>
  )
}

const onClick = (item: any) => {
  // tslint:disable-next-line: no-console
  console.log({ item })
}

export const INFO = {
  headline: 'Our present for you',
  description: `We’re upgrading you to the <strong>EDUBAO Standard</strong> package, <strong>saving you X€ / 
    month</strong> as well as the set-up fee for your Blocked Account. 
    </br></br>Within EDUBAO Standard you will receive the Blocked Account, Statutory Health Insurance, 
    Incoming Insurance, Liability Insurance, Accident Insurance and a 
    <strong>Current Account on top</strong> for 125€ / month only.`,
  content: <PresentComponent />,
  okButtonLabel: 'Ok, great!',
  okButtonType: 'primary',
  onOk: onClick,
  cancelButtonLabel: 'Back',
  onCancel: onClick,
}
