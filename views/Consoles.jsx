const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Consoles extends React.Component {
  render() {
    const { consoles } = this.props;
    return (
      <DefaultLayout title={"Gaming Consoles Dashboard"}>
        <div>
          <nav>
            <a href="/">Home</a>
            <br />
            <a href="/consoles/new">Add New Console</a>
          </nav>
          <ul>
            {consoles.map((console, i) => {
              return (
                <li key={i}>
                  <a href={`/consoles/${console.id}`}> {console.name} </a>
                </li>
              );
            })}
          </ul>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Consoles;
