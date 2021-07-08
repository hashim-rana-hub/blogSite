import {Container,ThemeProvider,createMuiTheme, Grid,makeStyles } from '@material-ui/core'
import './App.css'
import FeaturedPost from './components/FeaturedPost';
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import { featuredPosts, sidebar } from './data/Data';
import PostCard from './components/PostCard' 
import Footer from './components/Footer'



const useStyles=makeStyles((theme)=>({
  mainGrid: {
marginTop:theme.spacing(3) 
  }
}))

const App=()=>{
  const classes=useStyles()
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  
  return (
    <div className='App'>
      <ThemeProvider theme={darkTheme}>
      <Container >
        <Header />
        <FeaturedPost />
        <br/>
        <Grid container spacing ={4}>
       {featuredPosts.map((post)=>(
         <PostCard post={post} key={post.title} />
       ))}   
        </Grid >
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main title='From the Depth' />
          <Sidebar title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social} />
        </Grid>
        </Container>
        <Footer title='footer' description='vhvvgfvd hv hvd ' />
      </ThemeProvider>
     
    </div>
  )
}


export default App
