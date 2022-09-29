const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Home extends React.Component {
  render() {
    return (
      <DefaultLayout title={"Welcome to the Retro Game Store!"}>
        <div>
          <a href="/nintendogames">Nintendo Page</a>
          <br />
          <a href="microsoftgames">Microsoft Page</a>
          <br />
          <a href="/sonygames">Sony Page</a>
          <br />
          <a href="/consoles">Consoles</a>
          <br />
          <a href="/users">Users Page</a>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Home;
