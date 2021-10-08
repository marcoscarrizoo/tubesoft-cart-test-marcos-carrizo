import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    home: {
        display: 'flex',
        backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/002/096/258/non_2x/abstract-technology-background-free-vector.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        color: 'white',
        backgroundColor: 'purple'
    }
    }));

export default useStyles