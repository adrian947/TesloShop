import React, { FC } from 'react'
import { ISize } from '../../interfaces'
import { Box, Button } from '@mui/material'


interface Props {
    selectedSize?: ISize
    sizes: ISize[]
}

export const Sizes: FC<Props> = ({ sizes, selectedSize }) => {


    return (
        <Box>
            {sizes.map(size => (
                <Button
                    key={size}
                    sx={{ marginRight: '5px', marginTop: '10px' }}
                    size='small'
                    color={selectedSize === size ? 'primary' : 'secondary'}
                >
                    {size}
                </Button>
            ))}
        </Box>
    )
}

