import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import LeftMenu from './components/LeftMenu/LeftMenu';
import NoKeywords from './components/NoKeywords/NoKeywords';
import Meme from './components/Meme/Meme';
import Feed from './components/Feed/Feed';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/no-keywords">
          <Navbar />
          <div className="align">
            <NoKeywords />
            <Meme />
          </div>
        </Route>

        <Route path="/feeds">
          <Navbar />
          <div className="align">
            <LeftMenu />
            <Feed />
            <Meme />
          </div>
        </Route>

        <Route path="/bookmarks">
          <Navbar />
          <div className="align">
            <LeftMenu />
            <Bookmarks />
            <Meme />
          </div>
        </Route>

        <Route path="/content">
          <Navbar />
          <div className="align">
            <LeftMenu />
            <Content />
            <Meme />
          </div>
        </Route>

      </Router>
    </div>
  );
}

export default App;
