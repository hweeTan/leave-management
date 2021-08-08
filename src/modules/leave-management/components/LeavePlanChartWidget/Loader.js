import Skeleton from 'react-loading-skeleton'

import Grid from 'modules/common/components/Grid'
import Box from 'modules/common/components/Box'
import Flexbox from 'modules/common/components/Flexbox'

const Loader = () => (
  <Box as={Flexbox} style={{ height: '100%' }}>
    <div style={{ flex: 1, paddingRight: '1.5rem' }}>
      <Skeleton width={140} height={24} />
      <Skeleton width={340} height={24} style={{ margin: '0.5rem 0 1rem' }} />

      <Grid style={{ gap: '0.375rem' }}>
        {[...new Array(5)].map((_, index) => (
          <Grid.Item span={6} key={index}>
            <Skeleton width={100} height={26} style={{ borderRadius: 4 }} />
          </Grid.Item>
        ))}
      </Grid>
    </div>
    <div>
      <Skeleton width={300} height={178} />
    </div>
  </Box>
)

export default Loader
