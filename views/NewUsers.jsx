const React = require("react");

const DefaultLayout = require("./layouts/Default");
class NewUsers extends React.Component {
  render() {
    const { platform } = this.props;
    const { pName } = this.props;
    return (
      <DefaultLayout title={"New Users Page"}>
        <>
          <form action="/users" method="POST">
            Username: <input type="text" name="username" required />
            <br />
            Email: <input type="text" name="genre" required />
            <br />
            Bio: <input type="textarea" name="bio" />
            <br />
            Password: <input type="password" name="password" required />
            <br />
            Will you be a buyer, a seller, or both?: Renter:
            <input type="checkbox" name="renter" />
            Owner:
            <input type="checkbox" name="owner" />
            Both:
            <input type="checkbox" name="both" />
            <br />
            <input type="submit" value="Create User" />
          </form>
        </>
      </DefaultLayout>
    );
  }
}

module.exports = NewUsers;
