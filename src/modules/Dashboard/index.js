import Loader from '../../components/Loader'
import Pagination from '../../components/Pagination'
import {
  DashboardTableColumn,
  DashboardTableHead,
  DashboardWrapper,
  TableRow,
  Container,
} from '../../styled/modules/Dashboard'
import { tableColumns } from '../../utils/helpers'
// import LaunchDetails from '../LaunchDetails'
import Launches from './Launches'

function Dashboard() {
  return (
    <Container>
      <DashboardWrapper>
        <DashboardTableHead>
          <TableRow>
            {tableColumns.map((column, index) => (
              <DashboardTableColumn key={column} sizeNo={index + 1}>
                {column}
              </DashboardTableColumn>
            ))}
          </TableRow>
        </DashboardTableHead>
        <Launches />
      </DashboardWrapper>
      <Pagination />
      {/* <LaunchDetails /> */}
      <Loader />
    </Container>
  )
}

export default Dashboard
