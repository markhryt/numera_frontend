// components/SimpleFileUpload.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadFile } from './ScannerSlice';
import Navbar from '../nav/Nav';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from 'react-router';
export default function Scanner(){
    return(
        <div>
            <Navbar/>
            <div className='container text-center'>
    
                <h1 className='text-center mt-5 mb-5 '>Scan Documents</h1>
                <span className='row mt-5 mb-5'/>
                <span className='row mt-5 mb-5'/>

                <div className='mt-5 mb-5 text-center row'>
                    <SimpleFileUpload/>
                </div>
            </div>
      
        </div>
    );
}

function SimpleFileUpload() {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const dispatch = useDispatch();

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!selectedFile) {
        alert('Please select a file to upload.');
        return;
        }

        dispatch(uploadFile(selectedFile));
        navigate('downloadfile');
    };

    return (
        <form onSubmit={handleSubmit} className='container'>
            <div className='row'>
                <span className='col-5'/>
                <input className='col' type="file" onChange={handleFileChange}/>
                <span className='col'/>
            </div>
            <br/>
            <div>
                <button type="submit" class="btn btn-outline-primary" ><CloudUploadIcon/></button>
            </div>
        
        </form>
    );
}


