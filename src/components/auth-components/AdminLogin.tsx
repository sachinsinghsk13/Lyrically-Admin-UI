import { Field, FieldProps, Form, Formik } from "formik";
import '../../styles/AdminLogin.css'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom';
import { LoginCredentials } from "../../models/authentication-model";
import authService from "../../services/auth-service";
import { Grid, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";
import LoginIcon from '@mui/icons-material/Login';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
const initialValues = {
    username: '',
    password: ''
}

const schema = Yup.object().shape({
    username: Yup.string().required('Username is requierd'),
    password: Yup.string().required('Password is required')
});


const useStyles = makeStyles({
    root: {
        // background: ' linear-gradient(to right, #0f2027, #203a43, #2c5364);',
        background: `url('background1.jpg')`,
        backgroundSize: 'contain',
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        padding: '0.5rem'
    },
    formControl: {
        width: '100%',
        marginBottom: '4rem'
    }
});


const AdminLogin = (props: any) => {
    const history = useHistory();
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(true);
    const handleAdminLogin = async (credentials: LoginCredentials) => {
        let result = await authService.login(credentials);
        if (result) {
            history.push('/dashboard');
        } else {
            console.log("login failed");
        }
    }

    return (
        <Grid container className={classes.root}>
            <Grid item lg={3}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h4" sx={{ textAlign: 'center' }}>Lyrically</Typography>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>Admisistrative Login</Typography>
                    <Formik initialValues={initialValues} onSubmit={handleAdminLogin} validationSchema={schema}>
                        <Form className={classes.form}>
                            <Field name="username" type="text">{(props: FieldProps) => (
                                <TextField {...props.field}
                                    label="Username"
                                    margin="dense"
                                    type="text"
                                    fullWidth
                                    error={props.meta.touched && Boolean(props.meta.error)}
                                    helperText={props.meta.touched && props.meta.error} 
                                    />
                            )}</Field>
                            <Field name="password">{(props: FieldProps) => (
                                <TextField {...props.field}
                                    label="Password"
                                    margin="dense"
                                    type={showPassword ? 'password': 'text'}
                                    fullWidth
                                    error={props.meta.touched && Boolean(props.meta.error)}
                                    helperText={props.meta.touched && props.meta.error}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end">
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            )}</Field>

                            <Button variant="contained" 
                            disableElevation 
                            type="submit" 
                            sx={{ width: '100%', my: 1, p: 2 }} 
                            endIcon={<LoginIcon />}
                            
                            >Login</Button>
                        </Form>
                    </Formik>
                    <Button variant="text" color="secondary">Visit Public Website</Button>
                </Paper>
            </Grid>
        </Grid>
        // <Container fluid className="admin-login-container">
        //     <Row className="justify-content-center admin-login-row">
        //         <Col sm={12} md={8} lg={6} xl={4} className="d-flex align-items-center justify-content-center">
        //             <div className="bg-white p-3 w-100 rounded">
        //                 <div className="d-flex justify-content-center">
        //                     <img src="/logo.png" alt="" width="150px" height="80px" />
        //                 </div>
        //                 <h3 className="text-center text-dark p-2">Administrative Login</h3>
        //                 <Formik initialValues={initialValues} onSubmit={handleAdminLogin} validationSchema={schema}>
        //                     <Form>
        //                         <div className="mb-2">
        //                             {/* <Field as={TextField} type="text" name="username" id="username" className="form-control" placeholder="Username" /> */}
        //                             <TextField label="Username" id="username" variant="standard" sx={{width: '100%'}}/>
        //                         </div>
        //                         <div className="mb-2">
        //                             <FloatingLabel label="Password" controlId="password" placeholder="Password" className="mb-3">
        //                                 <Field as={TextField} type="password" name="password" id="password" className="form-control" placeholder="Password" />
        //                             </FloatingLabel>
        //                         </div>
        //                         <div className="mb-2 p-2 d-flex justify-content-start">
        //                             <button type="submit" className="btn py-3 btn-primary w-100 font-weight-bold">Login</button>
        //                         </div>
        //                         <div>
        //                             <Link to="/register">Register new admin</Link>
        //                         </div>
        //                     </Form>
        //                 </Formik>
        //             </div>
        //         </Col>
        //     </Row>
        // </Container>
    );
}

export default AdminLogin;