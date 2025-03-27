import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleMealCheck } from "../redux/mealSlice";

const MealCard = ({ meal }) => {
  const dispatch = useDispatch();

  return (
    <Card 
      sx={{ 
        backgroundColor: meal.checked ? "#1e1e1e" : "#121212",
        color: "#ffffff",
        border: meal.checked ? "2px solid #00ff99" : "2px solid transparent",
        transition: "0.3s",
        "&:hover": { transform: "scale(1.03)" }
      }}
    >
      <CardContent>
        <Typography variant="h6">{meal.name}</Typography>
        <Box mt={2}>
          <Button 
            variant="contained" 
            color={meal.checked ? "secondary" : "primary"} 
            onClick={() => dispatch(toggleMealCheck(meal.id))}
          >
            {meal.checked ? "Uncheck" : "Check"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MealCard;
