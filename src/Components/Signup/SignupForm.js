//React imports
import { useState } from 'react';

//MUI imports
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function SignupForm() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pswrd, setPswrd] = useState('')

    function handleSignup(e) {
        e.preventDefault()

        console.log(email, pswrd);

        setEmail('')
        setPswrd('')
    }

    return (
        <Container maxWidth="md" component="form" sx={{display:"flex", flexDirection:"column", my:2}} onSubmit={handleSignup}>

            <TextField margin="normal" label="Username" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} color="secondary" required/>
            <TextField margin="normal" label="Email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} color="secondary" required/>
            <TextField margin="normal" label="Password" type="password" value={pswrd} onChange={(e)=>setPswrd(e.target.value)} color="secondary" required/>

            <Button variant="contained" type="submit" sx={{color:"text.light"}}>Sign up</Button>
        </Container>
    )
}

export default SignupForm
