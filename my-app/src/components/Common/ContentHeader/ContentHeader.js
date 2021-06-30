import React from 'react';
import './ContentHeader.css';
import DateFilter from "../DateFilter/DateFilter";
import Grid from '@material-ui/core/Grid';

const ContentHeader = (props) => {
    return (
        <div className='my-md'>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} lg={4}>
                    <div className='shadow rounded-md content-header-child'>
                        <h3 className='content-header-title' style={{ margin: '10px' }}>{props.title}</h3>


                    </div>
                </Grid>


                <Grid item xs={12} md={9} lg={8}>
                    <div className='shadow rounded-md content-header-child header-filter'>

                        {props.children ?
                            <div className='content-header-children'>
                                {props.children}
                            </div>
                            : 
                        <DateFilter
                            startDate={props.startDate}
                            endDate={props.endDate}
                            changeStartDate={props.changeStartDate}
                            changeEndDate={props.changeEndDate}
                            searchClick={props.searchClick}
                        />}


                    </div>
                </Grid>
            </Grid>
        </div>


    )
}

export default ContentHeader