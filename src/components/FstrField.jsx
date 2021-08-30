import React from 'react';
import { Grid  } from '@material-ui/core';
export default function FstrField(props) {
  
    console.log(props.children)
    return (
        <Grid item xs={6}>
            <h1>hello {props.name}</h1>
            {props.children}
        </Grid>
    )
}