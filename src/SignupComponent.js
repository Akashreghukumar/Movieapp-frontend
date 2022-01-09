import React from 'react';
import {TextField,Button} from '@mui/material';

import axios from 'axios';


class SignupComponent extends React.Component{
    constructor(props){
        super()
        this.state={
            username:'',
            email:'',
            password:''

        }
    }
render(){
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
           const response= await axios.post('https://moviebackend7.herokuapp.com/register/signup',
           {

               username:this.state.username,
               password:this.state.password,
               email:this.state.email
           }
           )
           console.log(response.data)
           if(response.data){
               await localStorage.setItem('access-token',response.data);
               this.props.history.push('./signin')
           }
        }
        catch(err)
        {
            console.log(err)
        }
    }





    return(
        <div style={{padding:'60px'}}>
            <div>
            <h2>Signup </h2>
            </div>
             <form onSubmit={(e)=>handleSubmit(e)}>

                 <div>
                 <TextField id="standard-basic" label="Username" variant="standard" 
                 name="username" 
                 value={this.state.username} 
                 onChange={(e)=>this.setState({username:e.target.value})}/>
                 </div>
                 <div>
                 <TextField id="standard-basic" label="Email" variant="standard" 
                 name="email" 
                 value={this.state.email} 
                 onChange={(e)=>this.setState({email:e.target.value})}/>

                 </div>
                 <div>
                 <TextField id="standard-basic" label="Password" variant="standard" 
                                name="password" 
                                value={this.state.password} 
                                onChange={(e)=>this.setState({password:e.target.value})}
                 
                 />

                 </div>
                 <div style={{padding:'30px'}}>
                 <Button type="submit" variant="contained">Signup</Button><br></br>
                 </div>
                 <div>
                 <Button type="submit" variant="contained" onClick={() => this.props.history.push('./signin')}>Signin</Button>
                 </div>
             </form>

        </div>
       
    )
}


}

export default SignupComponent;
