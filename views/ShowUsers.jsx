const React = require("react");
const DefaultLayout = require("./layouts/Default");

class ShowUsers extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <DefaultLayout title={""}>
        <nav>
          <a href="/users">Back to Users Dashboard</a>
        </nav>
        <h1>User's Profile</h1>
        <h1>{user.username}</h1>
        <h3>Email: {user.email}</h3>
        <h3>Bio: {user.bio}</h3>
        <h3>Password: {user.password}</h3>
        <h3>
          {user.renterOrOwner
            ? "I rent games."
            : "I own games and lend them out to others."}
        </h3>
        {/* ? "I rent games and lend the, out to others." */}
      </DefaultLayout>
    );
  }
}

module.exports = ShowUsers;
