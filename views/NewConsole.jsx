const React = require("react");
const DefaultLayout = require("./layouts/Default");

class NewConsole extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Console Page"}>
        <div>
          <form action="/consoles" method="POST">
            <label>
              Name: <input type="text" name="name" required />
            </label>
            <br />
            <label>
              Description: <input type="textarea" name="description" required />
            </label>
            <br />
            <label>
              Availability: <input type="checkbox" name="availability" />
            </label>
            <br />
            <label>
              Photo: <input type="text" name="photo" />
            </label>
            <br />
            <label>
              <input type="submit" value="Create Console" />
            </label>
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = NewConsole;
