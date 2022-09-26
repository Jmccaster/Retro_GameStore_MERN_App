const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Index extends React.Component {
  render() {
    const { games } = this.props;
    console.log(games);
    return (
      <DefaultLayout title={"Game Dashboard"}>
        <nav>
          <a href={"/games/new"}>Add New Game</a>
        </nav>
        <ul>
          {games.map((game, i) => {
            return (
              <li key={i}>
                <a href={`/games/${game.id}`}>{game.title}</a>
                <br />

                <form action={`/games/${game.id}/edit`}>
                  <input type="submit" value="Edit" />
                </form>

                <form
                  action={`/games/${game._id}?_method=DELETE`}
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
