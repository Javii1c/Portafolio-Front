import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Icon from '@material-ui/core/Icon';
import './DateFilter.css';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const DateFilter = (props) => {


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around" alignItems='center'>
        <KeyboardDatePicker
          className='date-form-start'
          margin="normal"
          id="date-picker-start-date"
          label="Start date"
          format="MM/dd/yyyy"
          value={props.startDate}
          onChange={props.changeStartDate}
          minDate="01/01/2019"
          maxDate={props.endDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          className='date-form-end'
          margin="normal"
          id="date-picker-end-date"
          label="End date"
          format="MM/dd/yyyy"
          value={props.endDate}
          onChange={props.changeEndDate}
          minDate={props.startDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

        <button className='button-search' onClick={props.searchClick} >
          <div style={{ margin: '0 10px', fontWeight: '500' }}>SEARCH</div>  <Icon> search </Icon>
        </button>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default DateFilter