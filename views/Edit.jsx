const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Edit extends React.Component {
  render() {
    const { game } = this.props;
    return (
      <DefaultLayout title="Edit Page">
        <div>
          <form action={`/games/${game._id}?_method=PUT`} method="POST">
            Title:{" "}
            <input
              defaultValue={game.title}
              type="text"
              name="title"
              required
            />
            <br />
            Genre:{" "}
            <input
              defaultValue={game.genre}
              type="text"
              name="genre"
              required
            />
            <br />
            Description:{" "}
            <input
              defaultValue={game.description}
              type="textarea"
              name="description"
              required
            />
            <br />
            Platform:{" "}
            <input
              defaultValue={game.platform}
              type="text"
              name="console"
              required
            />
            <br />
            Is the game checked out?:{" "}
            {game.gameCheckedOUT ? (
              <input type="checkbox" name="gameCheckedOut" defaultChecked />
            ) : (
              <input type="checkbox" name="gameCheckedOut" />
            )}
            <br />
            <input type="submit" value="Create Game" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
