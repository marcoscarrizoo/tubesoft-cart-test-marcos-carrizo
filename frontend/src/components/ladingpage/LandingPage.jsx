import React from 'react'
import useStyles from './landingPageStyles';
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router';

function LandingPage() {
    const classes = useStyles()
    const history = useHistory()

    const redirect = () => {
        history.push('/catalog')
    }
    return (
        <div className={classes.home}>
            <div>
                <Button className={classes.button} variant='contained' onClick={redirect}>IR AL CATALOGO</Button>
            </div>
        </div>
    )
}

export default LandingPage;