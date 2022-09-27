const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Users extends React.Component {
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

                <form action={`users/${user._id}/edit`}>
                  <input type="submit" value="Edit" />
                </form>

                <form
                  action={`/users/${user._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="Delete" />
                </form>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Users;
