const React = require("react");
const DefaultLayout = require("./layouts/Default");

class UsersIndex extends React.Component {
  render() {
    const { users } = this.props;
    console.log(users);
    return (
      <DefaultLayout title={"User Dashboard"}>
        <nav>
          <a href={"/users/new"}>Add New User</a>
        </nav>
        <ul>
          {users.map((user, i) => {
            return (
              <li key={i}>
                <a href={`/users/${user.id}`}>{user.username}</a>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = UsersIndex;
