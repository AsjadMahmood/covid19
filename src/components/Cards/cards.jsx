import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './cards.module.css';
import Counter from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    console.log('confirmed', confirmed);
    if (confirmed === undefined) {
        return (<div>Loading . . .</div>)
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid xs={12} md={3} className={cx(styles.card, styles.infected)} item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <Counter start={0} end={confirmed.value} separator=',' duration={2.5}></Counter>
                        </Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid xs={12} md={3} className={cx(styles.card, styles.recovered)} item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recoveries</Typography>
                        <Typography variant='h5'>
                            <Counter start={0} end={recovered.value} separator=',' duration={2.5}></Counter>
                        </Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant='body2'>Number of recover cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid xs={12} md={3} className={cx(styles.card, styles.deaths)} item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <Counter start={0} end={deaths.value} separator=',' duration={2.5}></Counter>
                        </Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant='body2'>Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;