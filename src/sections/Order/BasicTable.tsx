import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(model: string, specification: string) {
  return { model, specification }
}

const rows = [
  createData('Model', '#8786867'),
  createData('Style', 'Classic style'),
  createData('Certificate', 'ISO-898921212'),
  createData('Size', '7-8-9'),
  createData('Material', 'soft and heavy')
]

const BasicTable = () => {
  return (
    <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #E0E7E9' }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">specification</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody sx={{}}>
          {rows.map(row => (
            <TableRow key={row.model} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  background: '#EFF2F4',
                  width: '30%',
                  fontSize: '16px',
                  color: '#505050',
                  border: '1px solid #E0E7E9'
                }}>
                {row.model}
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: '16px', color: '#505050', border: '1px solid #E0E7E9' }}>
                {row.specification}
              </TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default BasicTable
