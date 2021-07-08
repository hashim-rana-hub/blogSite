import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const FeaturedPost = () => {
    const useStyles=makeStyles({
        title:{
            fontSize:40,
            fontFamily:'Monstserrate'
        },
        cover:{
            backgroundImage:'url(https://images.unsplash.com/photo-1578429829702-37f6e0f6c44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80)',
            position:'center',
            padding:'35px 25px'
        },
        btn:{

        }
    })
    const classes=useStyles()
    return (

        <Card className={classes.cover}>
            <CardContent className={classes.textContainer}>
                <Typography className={classes.title} gutterBottom> Title of longer featured Post</Typography>
                <Typography variant='h5'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Typography>

            </CardContent>
            <CardActions>
                <Button className={classes.btn}>Read more...</Button>
            </CardActions>
        </Card>
    )
}

export default FeaturedPost
