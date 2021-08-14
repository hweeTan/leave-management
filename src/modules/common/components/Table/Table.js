import styled from 'styled-components'

import { colors, typography } from '../../utils/styles'

const Head = styled.thead`
  border-bottom: 1px ${colors.gray5} solid;
`

const Body = styled.tbody``

const Row = styled.tr`
  :nth-child(2n) {
    background-color: rgba(41, 51, 53, 0.04);
  }
`

const HeadCell = styled.th`
  padding: 1rem 0.75rem;
  text-align: ${({ align }) => align || 'left'};
  color: ${colors.gray3};
  ${typography.size.small}
  ${typography.weight.semibold}

  :first-child {
    padding-left: 1.5rem;
  }

  :last-child {
    padding-right: 1.5rem;
  }
`

const Cell = styled.td`
  padding: 1rem 0.75rem;
  text-align: ${({ align }) => align || 'left'};
  color: ${colors.gray1};
  ${typography.size.small}
  ${typography.weight.normal}

  :first-child {
    padding-left: 1.5rem;
  }

  :last-child {
    padding-right: 1.5rem;
  }
`

const Table = styled.table`
  background: ${colors.white};
  box-shadow: 0px 0px 8px rgba(17, 17, 26, 0.1);
  border-radius: 0.5rem;
  width: 100%;
  border-collapse: collapse;
`

Table.Head = Head
Table.Body = Body
Table.Row = Row
Table.HeadCell = HeadCell
Table.Cell = Cell

export default Table
