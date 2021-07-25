import React from 'react'
import SwiperCore, { A11y, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import styled from 'styled-components'

import { colors } from '../../utils/styles'
import { ChevronLeft, ChevronRight } from '../Icons'

SwiperCore.use([A11y, Navigation, Pagination])

const StyledSlider = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;

  .swiper-slide {
    padding: 0 2.5rem;

    @media only screen and (max-width: 768px) {
      padding: 0;
    }
  }
`

const StyledNavigationButton = styled.button`
  position: absolute;
  top: calc(50% - 0.75rem);
  z-index: 1;
  display: block;
  background: none;
  border: none;
  padding: 0;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  :hover {
    background-color: ${colors.gray5};
  }

  &.prevBtn {
    left: 0;
  }

  &.nextBtn {
    right: 0;
  }

  &[disabled] {
    opacity: 0.2;
    cursor: default;

    :hover {
      background-color: transparent;
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const PaginationWrapper = styled.div`
  text-align: center;
  margin-top: 0.5rem;

  .swiper-pagination-bullet {
    display: inline-block;
    margin-right: 0.375rem;
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;
    background-color: ${colors.gray5};

    &-active {
      background-color: ${colors.primary};
    }
  }

  @media only screen and (max-width: 768px) {
    text-align: left;
  }
`

const Slider = ({ children }) => (
  <StyledSlider>
    <Swiper
      spaceBetween={48}
      slidesPerView={1}
      navigation={{
        prevEl: '.prevBtn',
        nextEl: '.nextBtn',
      }}
      pagination={{
        type: 'bullets',
        el: '.paginationWrapper',
      }}
    >
      {React.Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}

      <div slot='container-end'>
        <StyledNavigationButton className='prevBtn'>
          <ChevronLeft color={colors.gray2} />
        </StyledNavigationButton>

        <StyledNavigationButton className='nextBtn'>
          <ChevronRight color={colors.gray2} />
        </StyledNavigationButton>

        <PaginationWrapper className='paginationWrapper' />
      </div>
    </Swiper>
  </StyledSlider>
)

export default Slider
