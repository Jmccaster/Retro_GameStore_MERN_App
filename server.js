// Initialize and Require Express
const express = require("express");
const app = express();

const Game = require("./models/games");

const mongoose = require("mongoose");

require("dotenv").config();

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to database");
});

//Override: CRUD methods
const methodOverride = require("method-override");

// Create JSX link
app.set("view engine", "jsx");
// Link JSX to app
app.engine("jsx", require("express-react-views").createEngine());

//Middleware
// Create body parser
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

//Routes (CRUD)

// Index Route
app.get("/games", (req, res) => {
  Game.find({}, (err, allGames) => {
    console.log(err);

    res.render("Index", {
      games: allGames,
    });
  });
});

// New Route
app.get("/games/new", (req, res) => {
  res.render("New", {});
});

// Create/ Post Route
app.post("/games", (req, res) => {
  if (req.body.gameCheckedOut === "on") {
    req.body.gameCheckedOut = true;
  } else {
    req.body.gameCheckedOut = false;
  }
  Game.create(req.body, (err, createdGame) => {
    console.log(err);
  });
  res.redirect("/games");
});

// Edit Route
app.get("/games/:id/edit", (req, res) => {
  Game.findById(req.params.id, (err, foundGame) => {
    console.log(err);
    res.render("Edit", { game: foundGame });
  });
});

// Update/Put Route
app.put("/games/:id", (req, res) => {
  if (req.body.gameCheckedOut === "on") {
    req.body.gameCheckedOut = true;
  } else {
    req.body.gameCheckedOut = false;
  }
  Game.findByIdAndUpdate(req.params.id, req.body, (err, updatedGame) => {
    res.redirect(`/games/${req.params.id}`);
  });
});

// Delete Route
app.delete("/games/:id", (req, res) => {
  Game.findByIdAndRemove(req.params.id, (err, foundGame) => {
    console.log("Deleted", foundGame);
    res.redirect("/games");
  });
});

// Seeds Route (Optional)
app.get("/games/seed", (req, res) => {
  Game.create(
    [
      {
        title: "Wario World",
        genre: "Adventure/Platformer",
        description:
          "Wario World is a 3D platform game developed by Treasure and published by Nintendo for the GameCube. The game's plot centers on Wario and his quest to regain his treasure and his castle from the evil gem, Black Jewel.",
        platform: "Nintendo Gamecube",
        gameCheckedOut: false,
      },
      {
        title: "Chrono Trigger",
        genre: "RPG",
        description:
          "Gameplay. Chrono Trigger features standard role-playing video game gameplay. The player controls the protagonist and his companions in the game's two-dimensional world, consisting of various forests, cities, and dungeons. Navigation occurs via an overworld map, depicting the landscape from a scaled-down overhead view.",
        platform: "SNES, Nintendo 3DS",
        gameCheckedOut: true,
      },
      {
        title: "Dragonball Advance Adventure",
        genre: "Beat-'em-up/Action",
        description:
          "Dragonball Advanced Adventure is based on the worldwide favorite Dragonball TV series. You'll get to become young Goku and play through his earliest adventures, as he courageously searches for the famous Dragon Balls.",
        platform: "Game Boy Advance",
        gameCheckedOut: false,
      },
    ],
    (err, data) => {
      res.redirect("/games");
    }
  );
});

// Show Route
app.get("/games/:id", (req, res) => {
  Game.findById(req.params.id, (err, foundGame) => {
    console.log(err);
    console.log("Found: ", foundGame);
    res.render("Show", {
      game: foundGame,
    });
  });
});

//Make sure the server is running
app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
