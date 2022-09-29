const React = require("react");
const DefaultLayout = require("./layouts/Default");

class EditConsole extends React.Component {
  render() {
    const { console } = this.props;
    return (
      <DefaultLayout title={"Edit Console Page"}>
        <div>
          <form action={`/consoles/${console._id}?_method=PUT`} method="POST">
            Name:{" "}
            <input
              defaultValue={console.name}
              type="text"
              name="name"
              required
            />
            <br />
            Description:{" "}
            <input
              defaultValue={console.description}
              type="textarea"
              name="description"
              required
            />
            <br />
            Availability:{" "}
            {console.availability ? (
              <input type="checkbox" name="availability" defaultChecked />
            ) : (
              <input type="checkbox" name="availability" />
            )}
            <br />
            <input type="submit" value="Submit Changes" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = EditConsole;
