// Initialize and Require Express
const express = require("express");
const app = express();

const Nintendo = require("./models/NintendoGames");
const Sony = require("./models/SonyGames");
const Microsoft = require("./models/MicrosoftGames");

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
//Home Page
app.get("/", (req, res) => {
  res.send("Welcome to the Retro Game Store!");
});

app.get("/nintendogames", (req, res) => {
  Nintendo.find({}, (err, allNintendoGames) => {
    console.log(err);

    res.render("Index", {
      games: allNintendoGames,
      platform: "nintendogames",
      pName: "Nintendo",
    });
  });
});

app.get("/microsoftgames", (req, res) => {
  Microsoft.find({}, (err, allMicrosoftGames) => {
    console.log(err);

    res.render("Index", {
      games: allMicrosoftGames,
      platform: "microsoftgames",
      pName: "Microsoft",
    });
  });
});

app.get("/sonygames", (req, res) => {
  Sony.find({}, (err, allSonyGames) => {
    console.log(err);

    res.render("Index", {
      games: allSonyGames,
      platform: "sonygames",
      pName: "Sony",
    });
  });
});

// New Route
app.get("/nintendogames/new", (req, res) => {
  res.render("New", {
    platform: "nintendogames",
    pName: "Nintendo",
  });
});

app.get("/sonygames/new", (req, res) => {
  res.send("New Sony Games");
});

// Create/ Post Route
app.post("/nintendogames", (req, res) => {
  if (req.body.gameCheckedOut === "on") {
    req.body.gameCheckedOut = true;
  } else {
    req.body.gameCheckedOut = false;
  }
  Game.create(req.body, (err, createdNintendoGame) => {
    console.log(err);
  });
  res.redirect("/nintendogames");
});

// Edit Route
app.get("/nintendogames/:id/edit", (req, res) => {
  Nintendo.findById(req.params.id, (err, foundNintendoGame) => {
    console.log(err);
    res.render("Edit", {
      game: foundNintendoGame,
      platform: "nintendogames",
      pName: "Nintendo",
    });
  });
});

// Update/Put Route
app.put("/nintendogames/:id", (req, res) => {
  if (req.body.gameCheckedOut === "on") {
    req.body.gameCheckedOut = true;
  } else {
    req.body.gameCheckedOut = false;
  }
  Nintendo.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err, updatedNintendoGame) => {
      res.redirect(`/nintendogames/${req.params.id}`);
    }
  );
});

// Delete Route
app.delete("/nintendogames/:id", (req, res) => {
  Nintendo.findByIdAndRemove(req.params.id, (err, foundNintendoGame) => {
    console.log("Deleted", foundNintendoGame);
    res.redirect("/nintendogames");
  });
});

// Seeds Route (Optional)
app.get("/nintendogames/seed", (req, res) => {
  Nintendo.create(
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
        platform: "SNES, Nintendo DS",
        gameCheckedOut: true,
      },
      {
        title: "Dragon Ball: Advanced Adventure",
        genre: "Beat-'em-up/Action",
        description:
          "Dragon Ball: Advanced Adventure is based on the worldwide favorite Dragon ball TV series. You'll get to become young Goku and play through his earliest adventures, as he courageously searches for the famous Dragon Balls.",
        platform: "Game Boy Advance",
        gameCheckedOut: false,
      },
    ],
    (err, data) => {
      res.redirect("/nintendogames");
    }
  );
});

// Show Route
app.get("/nintendogames/:id", (req, res) => {
  Nintendo.findById(req.params.id, (err, foundNintendoGame) => {
    console.log(err);
    console.log("Found: ", foundNintendoGame);
    res.render("Show", {
      game: foundNintendoGame,
      platform: "nintendogames",
      pName: "Nintendo",
    });
  });
});

//Make sure the server is running
app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
