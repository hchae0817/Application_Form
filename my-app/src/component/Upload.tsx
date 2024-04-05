import { TextField } from "@material-ui/core";
import axios from 'axios';
import { useState } from 'react';

function Upload(): JSX.Element {

    const [file, setFile] = useState(null);

    const UPLOAD_ENDPOINT =
        "http://localhost/react-php-file-upload/backend/upload.php";

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        //if await is removed, console log will be called before the uploadFile() is executed completely.
        //since the await is added, this will pause here then console log will be called
        let res = await uploadFile(file);
        console.log(res.data);
    };

    const uploadFile = async (file: any) => {
        const formData = new FormData();
        formData.append("avatar", file);

        return await axios.post(UPLOAD_ENDPOINT, formData, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });
    };

    const handleOnChange = (e: any) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    };


    return (
        <div id="upload">
            <li className='text-blue-800 text-left'> Please upload following links</li>
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="LinkedIn Link"
                variant="outlined"
                text-align="center" />

            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="Github Link"
                variant="outlined"
                text-align="center" />

            <br /><br />

            <li className='text-blue-800 text-left'> Please upload your CV</li>

            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleOnChange} />
            </form>
        </div>
    )
}

export default Upload