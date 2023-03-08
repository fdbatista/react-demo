import * as React from 'react';
import {useState} from 'react';
import '../App.css'
import {Box, Button, TextField} from "@mui/material";
import axios from "axios";
import {object, string} from 'yup'
import {Navbar} from "../template";
import {onInputChange} from "../../utils/stateValueSetter";

const attributes = {
    name: '',
    age: '',
    location: {
        address: ''
    }
}

const validationRules = object({
    name: string().required('Name is required'),
    location: object({
        address: string().required('Address is required'),
    })
})

function Example() {
    const [user, setUser] = useState<any>(attributes)
    const [validationErrors, setValidationErrors] = useState<any[]>([])

    const handleSave = async () => {
        validationRules.validate(user, { strict: false, abortEarly: false })
            .then(() => {
                setValidationErrors([])

                axios.post('', {})
                    .then()
                    .catch()
            })
            .catch(err => {
                const { errors } = err
                setValidationErrors(errors)
            })
    }

    return (
        <>
            <Navbar/>

            <Box>

                <TextField
                    label={'Name'}
                    name={'name'}
                    placeholder={'Type a name'}
                    value={user.name}
                    onChange={(event) => onInputChange(event, user, setUser)}
                />
            </Box>

            <Box mt={5}>
                <TextField
                    name={'location.address'}
                    value={user.address}
                    onChange={(event) => onInputChange(event, user, setUser)}
                />
            </Box>

            <pre style={{backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px'}}>{JSON.stringify(validationErrors)}</pre>

            <Box>
                <Button onClick={handleSave}>
                    Save
                </Button>
            </Box>
        </>
    );
}


export default Example
