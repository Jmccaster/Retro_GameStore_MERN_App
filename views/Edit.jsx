const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Edit extends React.Component {
  render() {
    const { nintendogame } = this.props;
    return (
      <DefaultLayout title="Edit Page">
        <div>
          <form
            action={`/nintendogames/${nintendogame._id}?_method=PUT`}
            method="POST"
          >
            Title:{" "}
            <input
              defaultValue={nintendogame.title}
              type="text"
              name="title"
              required
            />
            <br />
            Genre:{" "}
            <input
              defaultValue={nintendogame.genre}
              type="text"
              name="genre"
              required
            />
            <br />
            Description:{" "}
            <input
              defaultValue={nintendogame.description}
              type="textarea"
              name="description"
              required
            />
            <br />
            Platform:{" "}
            <input
              defaultValue={nintendogame.platform}
              type="text"
              name="platform"
              required
            />
            <br />
            Is the game checked out?:{" "}
            {nintendogame.gameCheckedOUT ? (
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
