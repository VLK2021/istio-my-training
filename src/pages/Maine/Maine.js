import React, {useState} from 'react';

import './MaineStyle.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';


const Maine = () => {
    const [age, setAge] = useState('');

    const handleChange = (e) => {
        setAge(e.target.value);
    };


    return (
        <div className={'maine'}>
            main
            <Box sx={{width: 100}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Дохід</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={10}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
};

export default Maine;