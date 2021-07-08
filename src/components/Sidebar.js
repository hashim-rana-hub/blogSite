// import classes from '*.module.css'
import {Grid, Paper, Typography,makeStyles,Link } from '@material-ui/core'
import React from 'react'

const useStyles =makeStyles((theme)=>({
    sidebarAbout:{
        padding:theme.spacing(2)
    },
    sideSection:{
        marginTop:theme.spacing(3)
    }

}))
const Sidebar = ({archives,description,social,title}) => {
    const classes=useStyles()

    return (
        
            <Grid item xs={12} md={4}>
                <Paper elevation={0} className={classes.sidebarAbout}>
                    <Typography variant='h6' >{title}</Typography>
                    <Typography> {description} </Typography>
                     </Paper>
                     <Typography variant='h6' gutterBottom className={classes.sideSection}> Archieves </Typography>
                     {
                         archives.map(archive=>(
                            <Link display='block' variant='body1' href={archive.url} key={archive.title} > {archive.title} </Link>
                         ))
                         
                     }


                      <Typography variant='h6' gutterBottom className={classes.sideSection}> Social </Typography>
                     {
                         social.map(network=>(
                            <Link display='block' variant='body1' href='#' key={network.title} > 
                            <Grid container direction='row' alignItems='center' spacing={1}>
                                <Grid item > <network.icon /></Grid>
                                <Grid item > {network.name }</Grid>

                            </Grid>
                             </Link>
                            
                            ))
                     }
            </Grid>    
            )
}

export default Sidebar
