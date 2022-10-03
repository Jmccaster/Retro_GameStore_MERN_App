// Initialize and Require Express
const express = require("express");
const app = express();

const Nintendo = require("./models/NintendoGames");
const PlayStation = require("./models/PlayStationGames");
const Xbox = require("./models/XboxGames");
const User = require("./models/Users");
const Console = require("./models/Consoles");

const mongoose = require("mongoose");

require("dotenv").config();

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to database");
});

//Override: CRUD methods.
const methodOverride = require("method-override");

// Middleware

//tells express to try to match requests with files in the directory called 'public'
app.use(express.static("public"));

// Create JSX link
app.set("view engine", "jsx");
// Link JSX to app
app.engine("jsx", require("express-react-views").createEngine());

// Create body parser
app.use(express.urlencoded({ extended: false }));

// Instantiates methodOverride for the CRUD methods
app.use(methodOverride("_method"));

//Routes (CRUD)

// Index Routes
//Home Page
app.get("/", (req, res) => {
  res.render("Home");
});

// Nintendo Main Page
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

// Xbox Main Page
app.get("/xboxgames", (req, res) => {
  Xbox.find({}, (err, allXboxGames) => {
    console.log(err);

    res.render("Index", {
      games: allXboxGames,
      platform: "xboxgames",
      pName: "Xbox",
    });
  });
});

// PlayStation Main Page
app.get("/playstationgames", (req, res) => {
  PlayStation.find({}, (err, allPlaystationGames) => {
    console.log(err);

    res.render("Index", {
      games: allPlaystationGames,
      platform: "playstationgames",
      pName: "PlayStation",
    });
  });
});

// Consoles Main Page
app.get("/consoles", (req, res) => {
  Console.find({}, (err, allConsoles) => {
    console.log(err);

    res.render("Consoles", { consoles: allConsoles });
  });
});

// Users Main Page
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

app.get("/xboxgames/new", (req, res) => {
  res.render("New", {
    platform: "xboxgames",
    pName: "Xbox",
  });
});

app.get("/playstationgames/new", (req, res) => {
  res.render("New", {
    platform: "playstationgames",
    pName: "PlayStation",
  });
});

app.get("/consoles/new", (req, res) => {
  res.render("NewConsole");
});

app.get("/users/new", (req, res) => {
  res.render("NewUser");
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

app.post("/xboxgames", (req, res) => {
  if (req.body.gameCheckedOut === "on") {
    req.body.gameCheckedOut = true;
  } else {
    req.body.gameCheckedOut = false;
  }
  Xbox.create(req.body, (err, createdXboxGame) => {
    console.log(err);
  });
  res.redirect("/xboxgames");
});

app.post("/playstationgames", (req, res) => {
  if (req.body.gameCheckedOut === "on") {
    req.body.gameCheckedOut = true;
  } else {
    req.body.gameCheckedOut = false;
  }
  PlayStation.create(req.body, (err, createPlaystationGame) => {
    console.log(err);
  });
  res.redirect("/playstationgames");
});

app.post("/consoles", (req, res) => {
  if (req.body.availability === "on") {
    req.body.availability = true;
  } else {
    req.body.availability = false;
  }
  Console.create(req.body, (err, createConsole) => {
    console.log(err);
  });
  res.redirect("/consoles");
});

app.post("/users", (req, res) => {
  // if (req.body.renterOrOwner === "on") {
  //   req.body.renterOrOwner = true;
  // } else {
  //   req.body.renterOrOwner = false;
  // }
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

app.get("/xboxgames/:id/edit", (req, res) => {
  Xbox.findById(req.params.id, (err, foundXboxGame) => {
    console.log(err);
    res.render("Edit", {
      game: foundXboxGame,
      platform: "xboxgames",
      pName: "Xbox",
    });
  });
});

app.get("/playstationgames/:id/edit", (req, res) => {
  PlayStation.findById(req.params.id, (err, foundPlaystationGame) => {
    console.log(err);
    res.render("Edit", {
      game: foundPlaystationGame,
      platform: "playstationgames",
      pName: "PlayStation",
    });
  });
});

app.get("/consoles/:id/edit", (req, res) => {
  Console.findById(req.params.id, (err, foundConsole) => {
    console.log(err);
    res.render("EditConsole", { console: foundConsole });
  });
});

app.get("/users/:id/edit", (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    console.log(err);
    res.render("EditUser", { user: foundUser });
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

app.put("/xboxgames/:id", (req, res) => {
  if (req.body.gameCheckedOut === "on") {
    req.body.gameCheckedOut = true;
  } else {
    req.body.gameCheckedOut = false;
  }
  Xbox.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err, updatedMicrosoftGame) => {
      res.redirect(`/xboxgames/${req.params.id}`);
    }
  );
});

app.put("/playstationgames/:id", (req, res) => {
  if (req.body.gameCheckedOut === "on") {
    req.body.gameCheckedOut = true;
  } else {
    req.body.gameCheckedOut = false;
  }
  PlayStation.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err, updatedPlaystationGame) => {
      res.redirect(`/playstationgames/${req.params.id}`);
    }
  );
});

app.put("/consoles/:id", (req, res) => {
  if (req.body.availability === "on") {
    req.body.availability = true;
  } else {
    req.body.availability = false;
  }
  Console.findByIdAndUpdate(req.params.id, req.body, (err, updatedConsole) => {
    res.redirect(`/consoles/${req.params.id}`);
  });
});

// Note: The user route has three ternary operators within it's show route. So if/else state will not be needed here, as it will conflict with data.
app.put("/users/:id", (req, res) => {
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

app.delete("/xboxgames/:id", (req, res) => {
  Xbox.findByIdAndRemove(req.params.id, (err, foundXboxGame) => {
    console.log("Deleted", foundXboxGame);
    res.redirect("/xboxgames");
  });
});

app.delete("/playstationgames/:id", (req, res) => {
  PlayStation.findByIdAndRemove(req.params.id, (err, foundPlaystationGame) => {
    console.log("Deleted", foundPlaystationGame);
    res.redirect("/playstationgames");
  });
});

app.delete("/consoles/:id", (req, res) => {
  Console.findByIdAndRemove(req.params.id, (err, foundConsole) => {
    console.log("Deleted", foundConsole);
    res.redirect("/consoles");
  });
});

app.delete("/users/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, foundUser) => {
    console.log("Deleted", foundUser);
    res.redirect("/users");
  });
});

// Seeds Route (Optional) (Sample data to put into our database to ensure it is populating correctly)
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

app.get("/xboxgames/:id", (req, res) => {
  Xbox.findById(req.params.id, (err, foundXboxGame) => {
    console.log(err);
    console.log("Found: ", foundXboxGame);
    res.render("Show", {
      game: foundXboxGame,
      platform: "xboxgames",
      pName: "Xbox",
    });
  });
});

app.get("/playstationgames/:id", (req, res) => {
  PlayStation.findById(req.params.id, (err, foundPlaystationGame) => {
    console.log(err);
    console.log("Found: ", foundPlaystationGame);
    res.render("Show", {
      game: foundPlaystationGame,
      platform: "playstationgames",
      pName: "PlayStation",
    });
  });
});

app.get("/consoles/:id", (req, res) => {
  Console.findById(req.params.id, (err, foundConsole) => {
    console.log(err);
    console.log("Found: ", foundConsole);
    res.render("ShowConsole", { console: foundConsole });
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
