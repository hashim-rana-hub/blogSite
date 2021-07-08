import {Toolbar ,IconButton,Typography, Divider, Badge, makeStyles} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'; 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SideDrawer from './SideDrawer';
// import classes from '*.module.css'
const useStyles = makeStyles((theme)=>({
title:{
    flexGrow:1,
},
tagline:{
    fontSize:'20px',
    fontFamily:'Times New Roman',
    justifyContent:'center',
    textTransform:'uppercase'
}
}))

const Header = () => {
    const classes=useStyles()
    return (
        <>
            <Toolbar>
                <SideDrawer>
                <IconButton color='inherit' ><MenuIcon /> </IconButton>
                </SideDrawer>
              <Typography variant='h6' className={classes.title} >Blogsite</Typography>
              <Badge badgeContent={4} color='secondary'>
                    <IconButton  color='inherit'>
                        < NotificationsActiveIcon  />
                        </IconButton>
               </Badge>
              <Badge color='secondary'>
              <IconButton color='inherit' > <AccountCircleIcon /> </IconButton>
                </Badge>

              </Toolbar>
              <Divider />
             <Toolbar>
             <Typography className={classes.tagline}>Express Your Feelings Through Words</Typography>
             </Toolbar>

        </>
    )
}

export default Header
