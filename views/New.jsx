// This page will be a form to add a new game into the database
const React = require("react");

const DefaultLayout = require("./layouts/Default");
class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Video Game Page"}>
        <>
          <form action="/games" method="POST">
            Title: <input type="text" name="title" required />
            <br />
            Genre: <input type="text" name="genre" id="" required />
            <br />
            Description: <input type="textarea" name="description" required />
            <br />
            Console: <input type="text" name="console" required />
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
