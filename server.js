// Initialize and Require Express
const express = require("express");
const app = express();

const Nintendo = require("./models/NintendoGames");
const Sony = require("./models/SonyGames");
const Microsoft = require("./models/MicrosoftGames");
const User = require("./models/Users");

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

// Index Routes
//Home Page
app.get("/", (req, res) => {
  res.render("Home");
});

// Nintendo Page
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

// Microsoft Page
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

// Sony Page
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

// Users Page
app.get("/users", (req, res) => {
  User.find({}, (err, allUsers) => {
    console.log(err);

    res.render("Users", { users: allUsers });
  });
});

// New Routes
app.get("/nintendogames/new", (req, res) => {
  res.render("New", {
    platform: "nintendogames",
    pName: "Nintendo",
  });
});

app.get("/microsoftgames/new", (req, res) => {
  res.render("New", {
    platform: "microsoftgames",
    pName: "Microsoft",
  });
});

app.get("/sonygames/new", (req, res) => {
  res.render("New", {
    platform: "sonygames",
    pName: "Sony",
  });
});

app.get("/users/new", (req, res) => {
  res.render("NewUsers");
});

// Create/ Post Routes
app.post("/nintendogames", (req, res) => {
  if (req.body.gameCheckedOut === "on") {
    req.body.gameCheckedOut = true;
  } else {
    req.body.gameCheckedOut = false;
  }
  Nintendo.create(req.body, (err, createdNintendoGame) => {
    console.log(err);
  });
  res.redirect("/nintendogames");
});

app.post("/microsoftgames", (req, res) => {
  if (req.body.gameCheckedOut === "on") {
    req.body.gameCheckedOut = true;
  } else {
    req.body.gameCheckedOut = false;
  }
  Microsoft.create(req.body, (err, createdNintendoGame) => {
    console.log(err);
  });
  res.redirect("/microsoftgames");
});

app.post("/sonygames", (req, res) => {
  if (req.body.gameCheckedOut === "on") {
    req.body.gameCheckedOut = true;
  } else {
    req.body.gameCheckedOut = false;
  }
  Sony.create(req.body, (err, createSonyGame) => {
    console.log(err);
  });
  res.redirect("/sonygames");
});

app.post("/users", (req, res) => {
  if (req.body.renterOrOwner === "on") {
    req.body.renterOrOwner = true;
  } else {
    req.body.renterOrOwner = false;
  }
  User.create(req.body, (err, createUser) => {
    console.log(err);
  });
  res.redirect("/users");
});

// Edit Routes
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

app.get("/microsoftgames/:id/edit", (req, res) => {
  Microsoft.findById(req.params.id, (err, foundMicrosoftGame) => {
    console.log(err);
    res.render("Edit", {
      game: foundMicrosoftGame,
      platform: "microsoftgames",
      pName: "Microsoft",
    });
  });
});

app.get("/sonygames/:id/edit", (req, res) => {
  Sony.findById(req.params.id, (err, foundSonyGame) => {
    console.log(err);
    res.render("Edit", {
      game: foundSonyGame,
      platform: "sonygames",
      pName: "Sony",
    });
  });
});

app.get("/users/:id/edit", (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    console.log(err);
    res.render("EditUsers", { user: foundUser });
  });
});

// Update/Put Routes
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

app.put("/microsoftgames/:id", (req, res) => {
  if (req.body.gameCheckedOut === "on") {
    req.body.gameCheckedOut = true;
  } else {
    req.body.gameCheckedOut = false;
  }
  Microsoft.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err, updatedMicrosoftGame) => {
      res.redirect(`/microsoftgames/${req.params.id}`);
    }
  );
});

app.put("/sonygames/:id", (req, res) => {
  if (req.body.gameCheckedOut === "on") {
    req.body.gameCheckedOut = true;
  } else {
    req.body.gameCheckedOut = false;
  }
  Sony.findByIdAndUpdate(req.params.id, req.body, (err, updatedSonyGame) => {
    res.redirect(`/sonygames/${req.params.id}`);
  });
});

app.put("/users/:id", (req, res) => {
  // if (req.body.renterOrOwner === "on") {
  //   req.body.renterOrOwner = true;
  // } else {
  //   req.body.renterOrOwner = false;
  // }
  User.findByIdAndUpdate(req.params.id, req.body, (err, updatedUser) => {
    res.redirect(`/users/${req.params.id}`);
  });
});

// Delete Routes
app.delete("/nintendogames/:id", (req, res) => {
  Nintendo.findByIdAndRemove(req.params.id, (err, foundNintendoGame) => {
    console.log("Deleted", foundNintendoGame);
    res.redirect("/nintendogames");
  });
});

app.delete("/microsoftgames/:id", (req, res) => {
  Microsoft.findByIdAndRemove(req.params.id, (err, foundMicrosoftGame) => {
    console.log("Deleted", foundMicrosoftGame);
    res.redirect("/microsoftgames");
  });
});

app.delete("/sonygames/:id", (req, res) => {
  Sony.findByIdAndRemove(req.params.id, (err, foundSonyGame) => {
    console.log("Deleted", foundSonyGame);
    res.redirect("/sonygames");
  });
});

app.delete("/users/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, foundUser) => {
    console.log("Deleted", foundUser);
    res.redirect("/users");
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

// Show Routes
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

app.get("/microsoftgames/:id", (req, res) => {
  Microsoft.findById(req.params.id, (err, foundMicrosoftGame) => {
    console.log(err);
    console.log("Found: ", foundMicrosoftGame);
    res.render("Show", {
      game: foundMicrosoftGame,
      platform: "microsoftgames",
      pName: "Microsoft",
    });
  });
});

app.get("/sonygames/:id", (req, res) => {
  Sony.findById(req.params.id, (err, foundSonyGame) => {
    console.log(err);
    console.log("Found: ", foundSonyGame);
    res.render("Show", {
      game: foundSonyGame,
      platform: "sonygames",
      pName: "Sony",
    });
  });
});

app.get("/users/:id", (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    console.log(err);
    console.log("Found: ", foundUser);
    res.render("ShowUser", { user: foundUser });
  });
});

//Make sure the server is running
app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
