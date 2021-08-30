import React, { useRef, useState } from 'react'
import { Button, makeStyles, Grid, TextField } from '@material-ui/core';
import FstrField from '../components/FstrField';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));
export default function LoginForm(props) {
    const classes = useStyles();
    // create state variables for each input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dataa, setDataa] = useState([]);
    var myData = useRef([]);


    const handleSubmit = () => {
        // e.preventDefault();
        let data = { firstName, lastName, email, password };
        let newData = { ...data }
        myData.current.push(data)

        //   let copyData = newData
        //   copyData.push({

        //   })
        //   myData.push(data);
        setDataa(myData.current);

        localStorage.setItem("user", JSON.stringify(dataa));

        // console.log(localStorage.getItem("user"), "data")

    };
    const handleClose = () => {
        props.history.push("/table")
    }
    console.log("myData", dataa)
    return (<div className={classes.root}>
        <Grid container>
            <FstrField name="haidar">
                <TextField
                    label="First Name"
                    variant="filled"
                    required
                    fullWidth
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                   <TextField
                    label="last Name"
                    className="hi"
                    variant="filled"
                    required
                    fullWidth
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </FstrField>
            <FstrField>
                <TextField
                    label="Last Name"
                    variant="filled"
                    required
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </FstrField>
            <TextField
                label="Email"
                variant="filled"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                variant="filled"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div>
                <Button variant="contained" onClick={handleClose}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">
                    Signup
                </Button>
            </div>
        </Grid>
    </div>
    )
}
