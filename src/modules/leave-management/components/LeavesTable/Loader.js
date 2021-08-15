import Skeleton from 'react-loading-skeleton'

import Table from 'modules/common/components/Table'

const Loader = () => (
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.HeadCell>ID</Table.HeadCell>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Team</Table.HeadCell>
        <Table.HeadCell>Request Type</Table.HeadCell>
        <Table.HeadCell>Reason</Table.HeadCell>
        <Table.HeadCell>Request Date</Table.HeadCell>
        <Table.HeadCell>Submit Date</Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell />
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {[...new Array(5)].map((_, index) => (
        <Table.Row key={index}>
          <Table.Cell>
            <Skeleton width={77} height={24} />
          </Table.Cell>
          <Table.Cell>
            <Skeleton width={155} height={24} />
          </Table.Cell>
          <Table.Cell>
            <Skeleton width={137} height={24} />
          </Table.Cell>
          <Table.Cell>
            <Skeleton width={235} height={24} />
          </Table.Cell>
          <Table.Cell>
            <Skeleton width={197} height={24} />
          </Table.Cell>
          <Table.Cell>
            <Skeleton width={131} height={24} />
          </Table.Cell>
          <Table.Cell>
            <Skeleton width={124} height={24} />
          </Table.Cell>
          <Table.Cell>
            <Skeleton width={100} height={24} />
          </Table.Cell>
          <Table.Cell>
            <Skeleton width={80} height={24} />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
)

export default Loader
