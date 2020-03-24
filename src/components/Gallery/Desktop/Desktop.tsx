import React from 'react'

import {Wrapper, Images, Image} from './style'

const Desktop = ({images = []}: IGallery) => {
  return (
    <Wrapper>
      <Images>
        {images.map((image, index) => (
          <Image image={image} key={index} />
        ))}
      </Images>
    </Wrapper>
  )
}

export default Desktop
