import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import AllMeetups from "./pages/AllMeetups";
import NewMeewtups from "./pages/NewMeetups";
import Favourites from "./pages/Favourites";
import Error from "./pages/Error";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <AllMeetups />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Route path="/newMeetups">
          <NewMeewtups />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
