import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
    AppBar, Toolbar, IconButton,
    Typography, Card,  CardContent, CardActions, Grid,
    
} from "@mui/material";


function MovieComponent(props) {

    const [movieList, setMovieList] = useState([]);

    const token = localStorage.getItem('access-token');

    useEffect(async () => {
        var response = await axios.get('http://localhost:3001/movie/get', {
            headers: {
                'access-token': token
            }
        })
        setMovieList(response.data);
        // console.log(response)
        // console.log("movielist of",movieList)
    },[])

    return (
        <>
            <div style={{ backgroundImage: "url(/img/image1.jpg)",
    backgroundRepeat: 'no-repeat',
  width:'100%',
  
    
    }}>

            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >

                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Movie Review App
                        </Typography>

                    </Toolbar>
                </AppBar>

            </div>
            <div style={{ padding: '30px' }}>
                <Grid container spacing={4}>


                    {movieList.map(row => (
                        <Grid item key={row._id}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 25,fontWeight:700 }} color="text.secondary" gutterBottom>
                                        {row.movieName}
                                    </Typography>
                                    <Typography variant="h5" component="div">

                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                       Category: {row.category}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                       Year: {row.year}
                                    </Typography>
                                    <Typography variant="body2">
                                        
                                        <br />
                                        {row.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button size="small">Learn More</Button> */}
                                </CardActions>
                            </Card>
                        </Grid>


                    ))}

                </Grid>



            </div>




            </div>

            
        </>

    )
}

export default MovieComponent;