import React from 'react'

import TextTwoLists from '../TextTwoLists'
import {INFO} from './const'

const TextAsymmetricalLists = (info: ITextTwoLists) => (
  <TextTwoLists {...info} symmetry={false} />
)

TextAsymmetricalLists.defaultProps = {...INFO, symmetry: false}

export default TextAsymmetricalLists
