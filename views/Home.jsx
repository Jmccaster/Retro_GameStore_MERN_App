const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Home extends React.Component {
  render() {
    return (
      <DefaultLayout title={"Welcome to the Retro Game Rental Store!"}>
        <link rel="stylesheet" href="/css/HomeApp.css" />
        <div className="pageContainer">
          <div className="platformBox">
            <div className="pLink">
              <a href="/nintendogames">Nintendo Page</a>
            </div>
            <img
              src="https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2021/09/24/9941D4E5-2427-43E3-9BD2-509CDB06565E/104.jpg?crop=640,640,x325,y0&width=1200&height=1200&optimize=low&format=webply"
              alt=""
              className="platPic"
            />
          </div>
          <div className="platformBox">
            <div className="pLink">
              <a href="/xboxgames" className="pLink">
                Xbox Page
              </a>
            </div>
            <img
              src="https://w0.peakpx.com/wallpaper/395/821/HD-wallpaper-x-box-logo-game-microsoft-xb-xbox.jpg"
              alt=""
              className="platPic"
            />
          </div>
          <div className="platformBox">
            <div className="pLink">
              <a href="/playstationgames" className="pLink">
                PlayStation Page
              </a>
            </div>
            <img
              src="https://images7.alphacoders.com/489/489590.jpg"
              alt=""
              className="platPic"
            />
          </div>
          <div className="platformBox">
            <div className="pLink">
              <a href="/consoles" className="pLink">
                Consoles Page
              </a>
            </div>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d3139093-f1c4-4621-b7bc-30aeeff7178a/d7yaa4b-609c863f-2bf7-4894-b6ba-93d0cedd2eab.jpg/v1/fill/w_1024,h_576,q_75,strp/g_r_e_a_t_e_s_t_game_consoles_ever___4k_wallpaper_by_nurboyxvi_d7yaa4b-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDMxMzkwOTMtZjFjNC00NjIxLWI3YmMtMzBhZWVmZjcxNzhhXC9kN3lhYTRiLTYwOWM4NjNmLTJiZjctNDg5NC1iNmJhLTkzZDBjZWRkMmVhYi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ksnXQVBXHlyI107PfbHR5WkmIXTTYmG0nsnoWbcsV2o"
              alt=""
              className="platPic"
            />
          </div>
          <div className="platformBox">
            <div className="pLink">
              <a href="users" className="pLink">
                Users Page
              </a>
            </div>
            <img
              src="https://cdn2.iconfinder.com/data/icons/game-streaming-3/60/Gamer-Profile-gaming-avatar-user-person-male-512.png"
              alt=""
              className="platPic"
            />
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Home;
