import React from 'react'
import useStyles from './HomeStyles';
import NavBar from '../navbar/NavBar'
import Card from '../products/Card'
const Home = () => {
    const classes = useStyles()
    return (
        <div >
            <div>
                <NavBar/>
            </div>
            
            <div>
                <Card/>
            </div>
        </div>
    )
}

export default Home
