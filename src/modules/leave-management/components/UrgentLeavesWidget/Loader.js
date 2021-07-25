import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

import Box from 'modules/common/components/Box'
import Flexbox from 'modules/common/components/Flexbox'

const ContentWrapper = styled.div`
  padding: 0 2.5rem;
  margin-top: 2rem;
`

const Loader = () => (
  <Box>
    <Skeleton width={240} height={24} />

    <ContentWrapper>
      <Flexbox alignItems='center' justifyContent='space-between'>
        <Flexbox>
          <Skeleton circle width={56} height={56} style={{ marginRight: '1rem' }} />
          <Flexbox direction='column' justifyContent='space-between'>
            <Skeleton width={120} height={16} />
            <Skeleton width={100} height={26} />
          </Flexbox>
        </Flexbox>

        <Skeleton width={132} height={32} style={{ borderRadius: 16 }} />
      </Flexbox>

      <Skeleton height={16} style={{ marginTop: 16 }} />
      <Skeleton height={16} style={{ marginTop: 8 }} />
    </ContentWrapper>
  </Box>
)

export default Loader
