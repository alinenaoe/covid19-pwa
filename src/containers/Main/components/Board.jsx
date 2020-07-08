import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({data}) {

    const { cases, todayDeaths, recovered, deaths, todayCases } = data

    const getValue = (value) => value ? value : 
        <Skeleton 
            variant="text" 
            width={182} 
            height={60} 
        />

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3} >
                <Card value={getValue(cases)} label="Cases" color="#5D78FF" >
                </Card>
            </Grid>

            <Grid item xs={12} md={3} >
                <Card value={getValue(todayDeaths)} label="Deaths today" color="#F7B829" >
                </Card>
            </Grid>

            <Grid item xs={12} md={3} >
                <Card value={getValue(todayCases)} label="Cases today" color="#000" >
                </Card>
            </Grid>

            <Grid item xs={12} md={3} >
                <Card value={getValue(deaths)} label="Deaths" color="#E95078" >
                </Card>
            </Grid>

            <Grid item xs={12} md={3} >
                <Card value={getValue(recovered)} label="Recovered" color="#67C887" >
                </Card>
            </Grid>

        </Grid>
    )
}

export default Board