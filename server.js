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
        title: "Halo Infinite",
        genre: "Shooter",
        description:
          "Halo Infinite is a 2021 first-person shooter game developed by 343 Industries and published by Xbox Game Studios. It is the sixth mainline entry in the Halo series, and the third in the Reclaimer Saga following Halo 5: Guardians (2015). The campaign follows the human super-soldier Master Chief and his fight against the enemy Banished on the Forerunner ringworld Zeta Halo, also known as Installation 07. Unlike previous installments in the series, the multiplayer portion of the game is free-to-play.",
        platform: "Xbox One and Xbox Series S/X",
        gameCheckedOut: false,
      },
      {
        title: "Ghost of Tsushima",
        genre: "Action/Adventure",
        description:
          "Ghost of Tsushima is a 2020 action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment. The player controls Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan.",
        platform: "Playstation 4 and Playstation 5",
        gameCheckedOut: true,
      },
      {
        title: "Mario Kart 8 Deluxe",
        genre: "Racing",
        description:
          "Mario Kart 8 Deluxe, is an enhanced version for the Nintendo Switch. It includes all previously released DLC, additional content, gameplay tweaks, 1080p graphics while docked, and 720p in handheld mode. It retains Mario Kart series game mechanics, where players control Mario franchise characters in kart racing, collecting a variety of items to hinder opponents or gain advantages in the race. Mario Kart 8 Deluxe introduces anti-gravity driving on walls or ceilings, and allows players to bump into each other for a short boost. It has single-player and multiplayer modes, including online via the Nintendo Network.",
        platform: "Nintendo Switch",
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
