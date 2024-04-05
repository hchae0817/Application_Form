

import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Personal(): JSX.Element {

    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState<Dayjs | null>(null);

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <div id="personal">
            <li className='text-blue-800 text-left'> Name and contact details</li>
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="First Name"
                variant="outlined"
                text-align="center" />

            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="Last Name"
                variant="outlined"
                text-align="center" />

            <br />
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="Email"
                variant="outlined"
                text-align="center" />

            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="Phone"
                variant="outlined"
                text-align="center" />

            <br />
            <br />
            <li className='text-blue-800 text-left'> Date of Birth</li>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Date of birth"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

            <br />
            <br />
            <li className='text-blue-800 text-left'> Please select the applying role type</li>
            <FormControl>

                <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="analyst" control={<Radio size="small" />} label="Data Analyst" />
                    <FormControlLabel value="engineer" control={<Radio size="small" />} label="Data Engineer" />
                    <FormControlLabel value="front" control={<Radio size="small" />} label="Front-end developer" />
                    <FormControlLabel value="back" control={<Radio size="small" />} label="Back-end developer" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <li className='text-blue-800 text-left'> Please select your gender</li>
            <FormControl>



                <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
                    <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
                    <FormControlLabel value="other" control={<Radio size="small" />} label="Other" />
                </RadioGroup>
            </FormControl>

            <br />
            <br />
            <li className='text-blue-800 text-left'> Extra Question</li>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <span className=' text-left'> Are you authorised to work lawfully in the United Kingdom?</span>
                
                <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Yes</MenuItem>
                    <MenuItem value={20}>No</MenuItem>
                </Select>
                <br/>
                <span className=' text-left'>   If not, please state the detailed explanation</span>
                <form>
                <TextField
                    variant="standard"
                    margin='normal'
                    fullWidth
                    multiline
                    rows={3}
                />
            </form>

            </FormControl>

        </div>
    )
}

export default Personal