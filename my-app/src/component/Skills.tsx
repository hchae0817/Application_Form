
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Data visualisation',
    'Data cleaning',
    'SQL',
    'Machine Learning',
    'AWS',
    'Git',
    'Python',
    'React',
    'C#'
];


export default function Skills() {

    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div id="skills">
            <div>
                <li className='text-blue-800 text-left'> Please select all applicable skills</li>
                <FormControl sx={{ m: 2, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">Skills</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={personName.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                    <br />

                </FormControl>
            </div>
            <li className='text-blue-800 text-left'> Please describe relevent project you had for selected skills</li>

            <form>
                <TextField
                    label="Description"
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    multiline
                    rows={6}
                />
            </form>

            <li className='text-blue-800 text-left'> Please describe relevent programming experience you had for selected skills</li>

            <form>
                <TextField
                    label="Description"
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    multiline
                    rows={6}
                />
            </form>

            <li className='text-blue-800 text-left'> Please describe other project or experiences you had outside university</li>

            <form>
                <TextField
                    label="Description"
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    multiline
                    rows={6}
                />
            </form>
        </div>
    );
}