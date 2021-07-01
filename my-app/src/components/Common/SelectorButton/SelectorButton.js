import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const selectorButton = (props) => {
    let options = props.options
    let setstate = props.change

    const handleChange = (event) => {
        setstate(event.target.value)}
    
    return (
        <>
            <FormControl >
            <h4>{props.title} </h4>
                <Select 
                    disableUnderline
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={props.value}
                    onChange={handleChange}
                >   
                    {options.map(o =>
                        <MenuItem  key={o.value} value={o.value}>{o.name}</MenuItem>    
                    )}
                </Select>
            </FormControl>
        </>
    )
}

export default selectorButton