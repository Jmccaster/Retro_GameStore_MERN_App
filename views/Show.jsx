const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Show extends React.Component {
  render() {
    const { games } = this.props;
    return (
      <DefaultLayout title={""}>
        <div>
          <nav>
            <a href={"/games"}>Back to Dashboard</a>
          </nav>
          <h1>Game Profile</h1>
          <h1>{this.props.game.title}</h1>
          <h3>Genre: {this.props.game.genre}</h3>
          <h3>Description: {this.props.game.description}</h3>
          <h3>Game is playable on: {this.props.game.console}</h3>
          <h3>
            Is the game checked out?:{" "}
            {this.props.game.gameCheckedOut
              ? "Sorry, game is currently unavailable."
              : "Game is currently available to rent!"}
          </h3>
          <br />
          <a href="/games"></a>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Show;
