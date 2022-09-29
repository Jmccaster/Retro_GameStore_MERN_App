// This page will be a form to add a new game into the database
const React = require("react");

const DefaultLayout = require("./layouts/Default");
class New extends React.Component {
  render() {
    const { platform } = this.props;
    const { pName } = this.props;
    return (
      <DefaultLayout title={`New ${pName} Game`}>
        <>
          <form action={`/${platform}`} method="POST">
            Title: <input type="text" name="title" required />
            <br />
            Genre: <input type="text" name="genre" id="" required />
            <br />
            Description: <input type="textarea" name="description" required />
            <br />
            Platform: <input type="text" name="platform" required />
            <br />
            Image: <input type="text" name="photo" />
            <br />
            Availability: <input type="checkbox" name="gameCheckedOut" />
            <br />
            <input type="submit" value="Create Game" />
          </form>
        </>
      </DefaultLayout>
    );
  }
}

module.exports = New;
