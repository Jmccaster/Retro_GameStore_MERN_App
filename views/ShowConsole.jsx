const React = require("react");
const DefaultLayout = require("./layouts/Default");

class ShowConsole extends React.Component {
  render() {
    const { console } = this.props;
    return (
      <DefaultLayout title={""}>
        <div>
          <nav>
            <a href="/consoles"> Back to Console Dashboard</a>
          </nav>
          <h1>Console Profile</h1>
          <h1>{console.name}</h1>
          <h3>{console.description}</h3>
          <h3>
            {console.availability
              ? "This console is available to rent!"
              : "Sorry, this console is currently unavailable."}
          </h3>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = ShowConsole;
