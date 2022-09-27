const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Show extends React.Component {
  render() {
    const { game } = this.props;
    const { platform } = this.props;
    const { pName } = this.props;
    console.log(game);
    return (
      <DefaultLayout title={" "}>
        <div>
          <nav>
            <a href={`/${platform}`}>Back to Dashboard</a>
          </nav>
          <h1>Game Profile</h1>
          <h1>{game.title}</h1>
          <h3>Genre: {game.genre}</h3>
          <h3>Description: {game.description}</h3>
          <h3>Platform: {game.platform}</h3>
          <h3>
            Is the game checked out?:{" "}
            {game.gameCheckedOut
              ? "Sorry, game is currently unavailable."
              : "Game is currently available to rent!"}
          </h3>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Show;
