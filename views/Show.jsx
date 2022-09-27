const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Show extends React.Component {
  render() {
    const { nintendoGame } = this.props;
    return (
      <DefaultLayout title={" "}>
        <div>
          <nav>
            <a href={"/nintendogames"}>Back to Dashboard</a>
          </nav>
          <h1>Game Profile</h1>
          <h1>{nintendoGame.title}</h1>
          <h3>Genre: {nintendoGame.genre}</h3>
          <h3>Description: {nintendoGame.description}</h3>
          <h3>Platform: {nintendoGame.platform}</h3>
          <h3>
            Is the game checked out?:{" "}
            {nintendoGame.gameCheckedOut
              ? "Sorry, game is currently unavailable."
              : "Game is currently available to rent!"}
          </h3>
          <br />
          <a href="nintendogames"></a>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Show;
