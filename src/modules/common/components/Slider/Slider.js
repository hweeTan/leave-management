import React, { useRef, useState } from 'react'
import SwiperCore, { A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import styled from 'styled-components'

import { colors } from '../../utils/styles'
import { ChevronLeft, ChevronRight } from '../Icons'

SwiperCore.use([A11y])

const StyledSlider = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
`

const StyledNavigationButton = styled.button`
  display: block;
  background: none;
  border: none;
  padding: 0;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;

  ${({ disabled }) =>
    disabled
      ? `
    opacity: 0.2;
  `
      : `
    cursor: pointer;
    :hover {
      background-color: ${colors.gray5};
    }
  `}
`

const StyledDot = styled.span`
  display: inline-block;
  margin-right: 0.375rem;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;

  ${({ active }) =>
    `background-color: ${active ? colors.primary : colors.gray5}`}
`

const SliderWrapper = styled.div`
  width: calc(100% - 5rem);
  margin: 0 1rem;
`

const PaginationWrapper = styled.div`
  text-align: center;
`

const Slider = ({ data, renderItem, getKey }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiper = useRef(null)

  return (
    <>
      <StyledSlider>
        <StyledNavigationButton
          disabled={activeIndex === 0}
          onClick={() => {
            swiper.current.slidePrev()
          }}
        >
          <ChevronLeft color={colors.gray2} />
        </StyledNavigationButton>
        <SliderWrapper>
          <Swiper
            spaceBetween={48}
            onSwiper={(swiperInstance) => (swiper.current = swiperInstance)}
            onSlideChange={(swiperInstance) =>
              setActiveIndex(swiperInstance.activeIndex)
            }
            slidesPerView={1}
          >
            {data.map((item) => (
              <SwiperSlide key={getKey(item)}>{renderItem(item)}</SwiperSlide>
            ))}
          </Swiper>
        </SliderWrapper>
        <StyledNavigationButton
          disabled={activeIndex === data.length - 1}
          onClick={() => {
            swiper.current.slideNext()
          }}
        >
          <ChevronRight color={colors.gray2} />
        </StyledNavigationButton>
      </StyledSlider>
      <PaginationWrapper>
        {data.map((item, index) => (
          <StyledDot key={getKey(item)} active={activeIndex === index} />
        ))}
      </PaginationWrapper>
    </>
  )
}

export default Slider
