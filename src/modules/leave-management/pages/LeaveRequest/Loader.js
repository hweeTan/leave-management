import Skeleton from 'react-loading-skeleton'

import Page from 'modules/common/components/Page'
import Grid from 'modules/common/components/Grid'
import Flexbox from 'modules/common/components/Flexbox'

const Loader = () => (
  <Page.Content>
    <Grid>
      <Grid.Item span={6} start={4}>
        <Skeleton width={240} height={24} />

        <Grid style={{ rowGap: '1rem', marginTop: '2.5rem' }}>
          <Grid.Item span={12}>
            <Flexbox>
              <Skeleton
                circle
                width={56}
                height={56}
                style={{ marginRight: '1rem' }}
              />
              <Flexbox direction='column' justifyContent='space-between'>
                <Skeleton width={120} height={16} />
                <Skeleton width={100} height={26} />
              </Flexbox>
            </Flexbox>
          </Grid.Item>

          <Grid.Item span={6}>
            <Skeleton
              width={100}
              height={20}
              style={{ display: 'block', marginBottom: '0.5rem' }}
            />
            <Skeleton width={160} height={20} />
          </Grid.Item>

          <Grid.Item span={6}>
            <Skeleton
              width={100}
              height={20}
              style={{ display: 'block', marginBottom: '0.5rem' }}
            />
            <Skeleton width={160} height={20} />
          </Grid.Item>

          <Grid.Item span={6}>
            <Skeleton
              width={100}
              height={20}
              style={{ display: 'block', marginBottom: '0.5rem' }}
            />
            <Skeleton width={160} height={20} />
          </Grid.Item>

          <Grid.Item span={6}>
            <Skeleton
              width={100}
              height={20}
              style={{ display: 'block', marginBottom: '0.5rem' }}
            />
            <Skeleton width={160} height={20} />
          </Grid.Item>

          <Grid.Item span={12}>
            <Skeleton
              width={100}
              height={20}
              style={{ display: 'block', marginBottom: '0.5rem' }}
            />
            <Skeleton width={360} height={20} />
          </Grid.Item>
        </Grid>
      </Grid.Item>
    </Grid>
  </Page.Content>
)

export default Loader
