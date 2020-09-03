import React, { useState } from 'react';
import './Search.css';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import   PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
function Search() {
    const history = useHistory();
    const [ startDate , setStartDate ] = useState(new Date());
    const [ endDate , setEndDate ] = useState(new Date());
    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    const selectionRange = {
        startDate : startDate,
        endDate : endDate,
        key : 'selection'
    }
    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>
                Number of guests <PeopleIcon />
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button onClick={()=>history.push("/search")}variant="outlined">Search Airbnb</Button>
        </div>
    )
}

export default Search;