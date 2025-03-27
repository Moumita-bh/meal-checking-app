import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeals, toggleMealCheck } from "../redux/mealSlice";
import { Container, Typography, Card, CardContent, Button, CircularProgress } from "@mui/material";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { meals, status } = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  console.log("Meals Data:", meals);

  if (status === "loading") {
    return (
      <Container sx={{ mt: 5, textAlign: "center" }}>
        <CircularProgress />
        <Typography>Loading meals...</Typography>
      </Container>
    );
  }

  if (!Array.isArray(meals) || meals.length === 0) {
    return (
      <Container sx={{ mt: 5, textAlign: "center" }}>
        <Typography>No meals available.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">Dashboard</Typography>
      {meals.map((meal) => (
        <Card key={meal.idCategory} sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6">{meal.strCategory}</Typography>
            <img src={meal.strCategoryThumb} alt={meal.strCategory} width={100} />
            <Button variant="contained" onClick={() => dispatch(toggleMealCheck(meal.idCategory))}>
              {meal.checked ? "Uncheck" : "Check"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Dashboard;
