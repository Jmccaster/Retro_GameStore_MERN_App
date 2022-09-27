const React = require("react");
const DefaultLayout = require("./layouts/Default");

class EditUsers extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <DefaultLayout title={"Edit User Page"}>
        <div>
          <form action={`/users/${user._id}?_method=PUT`} method="POST">
            Username:{" "}
            <input
              defaultValue={user.username}
              type="text"
              name="username"
              required
            />
            <br />
            Email:{" "}
            <input
              defaultValue={user.email}
              type="text"
              name="email"
              required
            />
            <br />
            Bio: <input defaultValue={user.bio} type="textarea" name="bio" />
            <br />
            Password:{" "}
            <input
              defaultValue={user.password}
              type="password"
              name="password"
              required
            />
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
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = EditUsers;
