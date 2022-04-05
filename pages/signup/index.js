import React, {useState} from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// MUI COMPONENTS
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import LoadingButton from "@mui/lab/LoadingButton";
import Card from "@mui/material/Card";

// import Alert from "@mui/material/Alert";
// import AlertTitle from "@mui/material/AlertTitle";

// CUSTOM ICONS
import GoogleIcon from "../../assets/GoogleIcon";
import FacebookIcon from "../../assets/FacebookIcon";

// FORMIK COMPONENTS
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";

// // MY COMPONENTS
// import AuthCopyright from "../../components/auth/AuthCopyright";

// RouterLink
// import { Link as RouterLink } from "react-router-dom";

// YUP
import * as Yup from "yup";
import { Router } from "react-router-dom";

// HOOKS
// import { useAuth } from "../../hooks";

const initialValues = {
  name:"",
  email: "",
  password: "",
};

const SignInSchema = Yup.object().shape({
  name: Yup.string().required("Field required !"),
  email: Yup.string().email("Email invalid !").required("Field required !"),
  password: Yup.string().required("Field required !"),
});
const testExistUser ={
  name: "Alexander",
  email: "Alexander@gmail.com",
  password: "123456"
}

const index = () => {

  const router= useRouter();

  const onSubmit = async (values) => {
    /* fetch('https://jsonplaceholder.typicode.com/users') // when we use API
    .then(response => response.json())
    .then(json => console.log(json))*/

    console.log(values);
    if (values.email && values.password)
    {
      if (values.email===testExistUser.email) 
      {
        toast.error("Email has been use!!!");
        return;
      }
    }

    values.name=initialValues.name; // Set form = null
    values.email=initialValues.email;
    values.password=initialValues.password;
    toast("congratulation, your account has been successfully created");
    /* router.push("/signin"); */ // we can move to Sign In Page


  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <Box sx={{ mt: 4 }}>
          {/* <Alert severity="info" sx={{ mb: 2 }}>
            <AlertTitle>Normal Account</AlertTitle>
            <div>
              Email Address : <strong>doanquochiep32@gmail.com</strong>
            </div>
            <div>
              Password : <strong>1</strong>
            </div>
          </Alert>
          <Alert severity="info" sx={{ mb: 2 }}>
            <AlertTitle>Admin Account</AlertTitle>
            <div>
              Email Address : <strong>1712032@student.hcmus.edu.vn</strong>
            </div>
            <div>
              Password : <strong>1</strong>
            </div>
          </Alert> */}
          {/* {message.text && (
            <Alert severity={message.status} sx={{ mb: 2 }}>
              <div>{message.text}</div>
            </Alert>
          )} */}
          <div>
        <ToastContainer />
      </div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={SignInSchema}
            validateOnBlur={false}
            // validateOnChange={false}
          >
            {(formik) => {
              return (
                <Form>
                    <Field
                    component={TextField}
                    margin="normal"
                    fullWidth
                    label="User Name"
                    name="name"
                    type="text"
                    autoFocus
                  />
                  <Field
                    component={TextField}
                    margin="normal"
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    autoFocus
                  />

                  <Field
                  
                    component={TextField}
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                  />
                  <LoadingButton
                    fullWidth
                    sx={{
                      mt: 3,
                      mb: 2,
                    }}
                    disabled={!formik.isValid}
                    type="submit"
                    loading={formik.isSubmitting}
                    variant="contained"
                  >
                    Sign Up
                  </LoadingButton>
                  <Divider>
                    <Chip label="OR" />
                  </Divider>
                  <Button
                    fullWidth
                    variant="outlined"
                    // onClick={signInWithGoogle}
                    startIcon={<GoogleIcon />}
                    sx={{
                      mt: 3,                      
                      border: "none",
                      "&:hover": {
                        border: "none",
                      },
                      color: "text.secondary",
                      //   textTransform: "none",
                    }}
                    component={Card}
                    disableRipple
                    disableFocusRipple
                    disableTouchRipple
                  >
                    Sign In With Google
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    // onClick={signInWithGoogle}
                    startIcon={<FacebookIcon />}
                    sx={{
                      mt: 2,
                      mb: 3,
                      border: "none",
                      "&:hover": {
                        border: "none",
                      },
                      color: "text.secondary",
                      //   textTransform: "none",
                    }}
                    component={Card}
                    disableRipple
                    disableFocusRipple
                    disableTouchRipple
                  >
                    Sign In With Facebook
                  </Button>
                </Form>
              );
            }}
          </Formik>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Link href="/signin" variant="body2">
                {"I already have an account"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <AuthCopyright sx={{ mt: 8, mb: 4 }} /> */}
    </Container>
  );
};
export default index;
