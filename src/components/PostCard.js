// import classes from '*.module.css'
import { Card, CardActionArea, CardContent, Grid, Typography,makeStyles, Hidden, CardMedia } from '@material-ui/core'
import React from 'react'

const useStyles=makeStyles({
    card:{
        display:'flex'
    },
    cardDetails:{
    flex:1        
    },
    cardMedia:{
        width:160,
    }

})

const PostCard = ({post}) => {
    const classes=useStyles()
    return (
       <Grid item xs={12} md={6}>
           <CardActionArea component='a' href='a'>
                <Card className={classes.card}> 
                    <div className={classes.cardDetails}>
                        <CardContent>
                        <Typography component='h2' variant='h5' >{post.title}</Typography>
                        <Typography variant='subtitle1'> {post.date}</Typography>
                        <Typography variant='subtitle1' paragraph> {post.description}</Typography>
                        <Typography variant='subtitle2' paragraph> Continue Reading</Typography>

                        </CardContent>
                     
                    </div>
                        <Hidden xsDown>
                            <CardMedia
                            className={classes.cardMedia}
                            image={post.image}
                            title={post.imageTitle}
                            />
                        </Hidden>

                </Card>
           </CardActionArea>
       </Grid>
    )
}

export default PostCard
