import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { Search } from "./Search";
const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    cuisine: "Italian",
    ingredients: [
      "Spaghetti",
      "Eggs",
      "Bacon",
      "Parmesan cheese",
      "Black pepper",
    ],
    instructions:
      "1. Cook spaghetti according to package instructions. 2. In a skillet, cook bacon until crispy. 3. In a bowl, whisk together eggs and grated Parmesan cheese. 4. When spaghetti is cooked, drain and return to the pot. 5. Quickly add the egg mixture to the hot spaghetti, tossing to coat. 6. Add cooked bacon and black pepper, and toss again. Serve immediately.",
    cookingTime: "20 minutes",
    servings: 4,
    imageUrl: "https://www.example.com/spaghetti-carbonara.jpg",
    tags: ["pasta", "quick", "easy"],
  },
  {
    id: 2,
    title: "Chicken Stir-Fry",
    cuisine: "Asian",
    ingredients: [
      "Chicken breast",
      "Bell peppers",
      "Broccoli",
      "Carrots",
      "Soy sauce",
      "Garlic",
      "Ginger",
      "Sesame oil",
    ],
    instructions:
      "1. Cut chicken breast into bite-sized pieces and marinate in soy sauce, garlic, and ginger. 2. Heat sesame oil in a wok or skillet over high heat. 3. Add chicken and stir-fry until cooked through. 4. Add chopped vegetables and continue stir-frying until tender-crisp. 5. Serve hot with rice or noodles.",
    cookingTime: "25 minutes",
    servings: 4,
    imageUrl: "https://www.example.com/chicken-stir-fry.jpg",
    tags: ["stir-fry", "healthy", "quick"],
  },
  {
    id: 3,
    title: "Vegetable Lasagna",
    cuisine: "Italian",
    ingredients: [
      "Lasagna noodles",
      "Zucchini",
      "Yellow squash",
      "Carrots",
      "Spinach",
      "Ricotta cheese",
      "Mozzarella cheese",
      "Marinara sauce",
    ],
    instructions:
      "1. Cook lasagna noodles according to package instructions. 2. Slice zucchini, yellow squash, and carrots thinly. 3. In a skillet, sauté spinach until wilted. 4. In a baking dish, layer noodles, vegetables, ricotta cheese, mozzarella cheese, and marinara sauce. Repeat layers. 5. Bake in preheated oven at 375°F (190°C) for 30-35 minutes, until bubbly and golden.",
    cookingTime: "45 minutes",
    servings: 6,
    imageUrl: "https://www.example.com/vegetable-lasagna.jpg",
    tags: ["vegetarian", "comfort food", "weeknight dinner"],
  },
  {
    id: 4,
    title: "Beef Tacos",
    cuisine: "Mexican",
    ingredients: [
      "Ground beef",
      "Taco seasoning",
      "Tortillas",
      "Lettuce",
      "Tomatoes",
      "Onions",
      "Cheese",
      "Salsa",
      "Sour cream",
    ],
    instructions:
      "1. In a skillet, brown ground beef and drain excess fat. 2. Add taco seasoning and water according to package instructions. 3. Warm tortillas in a separate skillet or in the oven. 4. Assemble tacos with beef, lettuce, tomatoes, onions, cheese, salsa, and sour cream. 5. Serve immediately.",
    cookingTime: "20 minutes",
    servings: 4,
    imageUrl: "https://www.example.com/beef-tacos.jpg",
    tags: ["tacos", "Mexican", "quick"],
  },
  {
    id: 5,
    title: "Mediterranean Quinoa Salad",
    cuisine: "Mediterranean",
    ingredients: [
      "Quinoa",
      "Cucumber",
      "Tomatoes",
      "Red onion",
      "Kalamata olives",
      "Feta cheese",
      "Fresh parsley",
      "Lemon juice",
      "Olive oil",
      "Salt",
      "Black pepper",
    ],
    instructions:
      "1. Cook quinoa according to package instructions and let cool. 2. Chop cucumber, tomatoes, red onion, and parsley. 3. In a large bowl, combine cooked quinoa, chopped vegetables, sliced Kalamata olives, and crumbled feta cheese. 4. Drizzle with lemon juice and olive oil. Season with salt and black pepper to taste. 5. Toss gently to combine. Serve chilled.",
    cookingTime: "30 minutes",
    servings: 6,
    imageUrl: "https://www.example.com/mediterranean-quinoa-salad.jpg",
    tags: ["salad", "Mediterranean", "healthy"],
  },
  // Add more recipes as needed
];
export const DishesApp = () => {
  const [childata, setChildData] = useState([]);
  const handleChildData = (childata) => {
    setChildData(childata);
  };
  // const [filterData, setFilterData] = useState(recipes);
  // const handleChange = (e) => {
  //   setFilterData(
  //     recipes.filter((item) =>
  //       item.cuisine.toLowerCase().includes(e.target.value.toLowerCase())
  //     )
  //   );
  // };
  // useEffect(() => {
  //   setFilterData(recipes);
  // }, []);

  useEffect(() => {
    setChildData(recipes);
  }, []);
  // console.log(recipes);
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {/* <input onChange={handleChange} type="text"></input> */}
      DishesApp
      {/* <div
        style={{
          display: "flex",
        }}
      > */}
      {childata.length > 0 ? (
        childata.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                padding: "10px",
                margin: "10px",
              }}
            >
              <Card data={item} />
            </div>
          );
        })
      ) : (
        <div>
          <h1>Data not Found</h1>
        </div>
      )}
      {/* </div> */}
      <Search recipes={recipes} parentChildData={handleChildData} />
    </div>
  );
};
