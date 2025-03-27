import { Button, Container, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../redux/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = () => {
    dispatch(signIn({ email: "user@example.com", name: "John Doe" })); // Mock user
    navigate("/login");
  };

  return (
    <Container sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h4">Sign In</Typography>
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" fullWidth margin="normal" />
      <Button variant="contained" onClick={handleSignIn}>Sign In</Button>
    </Container>
  );
};

export default SignIn;
