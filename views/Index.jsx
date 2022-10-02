const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Index extends React.Component {
  render() {
    const { games } = this.props;
    const { platform } = this.props;
    const { pName } = this.props;
    // console.log(this.props);
    return (
      <DefaultLayout title={` ${pName} Games Dashboard `}>
        <link rel="stylesheet" href={`/css/${pName}App.css`} />
        <nav>
          <a href="/">Home</a>
          <br />
          <a href={`/${platform}/new`}>Add New Game</a>
        </nav>
        <ul>
          {games.map((game, i) => {
            return (
              <li key={i}>
                <img
                  src={game.photo}
                  alt="game img"
                  width="200px"
                  height="200px"
                />
                <br />
                <a href={`/${platform}/${game.id}`}>{game.title}</a>
                <br />

                <form action={`/${platform}/${game.id}/edit`}>
                  <input type="submit" value="Edit" />
                </form>

                <form
                  action={`/${platform}/${game._id}?_method=DELETE`}
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
