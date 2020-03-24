import React from 'react'

import TextTwoLists from '../TextTwoLists'
import {INFO} from './const'

const TextSymmetricalLists = (info: ITextTwoLists) => (
  <TextTwoLists {...info} symmetry={true} />
)

TextSymmetricalLists.defaultProps = {...INFO, symmetry: true}

export default TextSymmetricalLists
