import React from 'react'
import {Icon, Carousel} from 'antd'

import {dimension} from 'utils'
import {useWindowDimensions} from '../WindowDimensionsProvider'
import {Wrapper} from './style'

const CustomCarousel = (props: any) => {
  const {children, ...rest} = props
  const {width} = useWindowDimensions()
  const platform = dimension.getName(width)
  let carousel: any
  const setRef = (node: any) => (carousel = node)
  const goPrev = () => carousel.prev()
  const goNext = () => carousel.next()
  const showArrows = children && children.length !== 1

  return (
    <Wrapper className='edu-carousel' platform={platform}>
      {showArrows && (
        <Icon className='prev-icon' type='left' onClick={goPrev} />
      )}
      <Carousel
        adaptiveHeight={true}
        dots={false}
        autoplay={false}
        {...rest}
        ref={setRef}
      >
        {children}
      </Carousel>
      {showArrows && (
        <Icon className='next-icon' type='right' onClick={goNext} />
      )}
    </Wrapper>
  )
}

export default CustomCarousel
