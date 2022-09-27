const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Index extends React.Component {
  render() {
    const { nintendoGames } = this.props;
    console.log(this.props);
    return (
      <DefaultLayout title={"Nintendo Games Dashboard"}>
        <nav>
          <a href={"/nintendogames/new"}>Add New Game</a>
        </nav>
        <ul>
          {nintendoGames.map((nintendogame, i) => {
            return (
              <li key={i}>
                <a href={`/nintendogames/${nintendogame.id}`}>
                  {nintendogame.title}
                </a>
                <br />

                <form action={`/nintendogames/${nintendogame.id}/edit`}>
                  <input type="submit" value="Edit" />
                </form>

                <form
                  action={`/nintendogames/${nintendogame._id}?_method=DELETE`}
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

module.exports = Index;
