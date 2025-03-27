import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">Profile</Typography>
      <Typography>Email: user@example.com</Typography>
      <Button variant="contained" onClick={() => navigate("/")}>Logout</Button>
    </Container>
  );
};

export default Profile;
