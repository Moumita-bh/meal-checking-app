import { Button, Container, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../redux/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(signIn({ email: "user@example.com", name: "John Doe" })); // Mock login
    navigate("/dashboard", { replace: true });

  };

  return (
    <Container sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h4">Login</Typography>
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <Button variant="contained" onClick={handleLogin}>Login</Button>
    </Container>
  );
};

export default Login;

