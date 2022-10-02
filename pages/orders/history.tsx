import NextLink from 'next/link';
import { Chip, Grid, Link, Typography } from '@mui/material'
import { ShopLayout } from '../../components/layout'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullName', headerName: 'Full name', width: 300 },
    {
        field: 'paid',
        headerName: 'Payment',
        description: 'Show information about payments',
        width: 200,
        renderCell: (params: any) => {
            return (
                params.row.paid
                    ? <Chip color='success' variant='outlined' label='Paid out' />
                    : <Chip color='error' variant='outlined' label='Not payed' />
            )
        }
    },
    {
        field: 'order',
        headerName: 'Order',
        description: 'Redirect order',
        width: 200,
        sortable: false,
        renderCell: (params: any) => {
            return (
                <>
                    <NextLink href={`/orders/${params.row.orderId}`}>
                        <Link>
                            {params.row.orderId}
                        </Link>
                    </NextLink>
                </>
            )
        }
    }
]

const rows = [
    { id: 1, fullName: 'Pepe pepe', paid: false, orderId: 40 },
    { id: 2, fullName: 'Juan juan', paid: true, orderId: 50 },
    { id: 3, fullName: 'Pedro pedro', paid: false, orderId: 60 },
    { id: 4, fullName: 'Jacinto jacinto', paid: true, orderId: 70 }
]


const HistoryPage = () => {
    return (
        <ShopLayout title='history orders' pageDescription='history order clients'>
            <Typography variant='h1' component='h1'>Order History</Typography>
            <Grid container>
                <Grid item xs={12} sx={{ height: 650, vidth: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    />

                </Grid>

            </Grid>
        </ShopLayout>
    )
}

export default HistoryPage