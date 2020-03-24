import React from 'react'
import styled from 'styled-components'
import { color as themeColor } from 'themes'
import Select from 'react-select'

const formatOptionLabel = ({ label }: any) => (
  <StyledOption>
    <IconContainer />
    <LabelContainer>
      <span>{label}</span>
    </LabelContainer>
  </StyledOption>
)

const dot = (color = '#0D507A') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: '50%',
    content: '" "',
    display: 'block',
    marginRight: 16,
    height: 24,
    width: 24,
  },
})

const customStyles = {
  menu: (provided: any, state: any) => ({
    ...provided,
    flexGrow: 1,
    borderBottom: 'none',
    color: themeColor.background,
    padding: 0,
  }),

  control: (styles: React.CSSProperties) => ({
    ...styles,
    border: 'none',
    borderRadius: 16,
    display: 'flex',
    flexGrow: 1,
  }),
  input: (styles: React.CSSProperties, state: any) => {
    return state.isFocused ? ({ ...styles, ...dot() }) : ({...styles})
  },
  placeholder: (styles: React.CSSProperties) => ({ ...styles, ...dot() }),
  singleValue: (styles: any) => ({ ...styles }),
  multiValue: (styles: any) => ({ ...styles }),
}

export const StyledSelect = styled((props: any) => {
  return (
    <Select
      {...props}
      styles={customStyles}
      formatOptionLabel={formatOptionLabel}
    />
  )
})`
  && {
    display: flex;
    flex-grow: 1;
    border-radius: 16px;
    border: none;

    height: 48px;
    background: ${themeColor.white};
  }
`

export const StyledOption = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`

export const IconContainer = styled.div`
  display: flex;
  height: 24px;
  width: 24px;
  background: ${themeColor.mainBlue};
  border-radius: 50%;

  margin-right: 16px;
`

export const LabelContainer = styled.div`
  display: flex;
  font-size: 18px;
  line-height: 24px;
  color: ${themeColor.mainBlue};

  font-weight: normal;
`
