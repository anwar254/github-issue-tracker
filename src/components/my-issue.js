import AppHeader from './app-header';
import IssueList from './Issue-list';
import { Navbar } from './navbar';

function Myissue() {
  return (
      <div>
        <AppHeader 
            img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.worldphoto.org%2Fsites%2Fdefault%2Ffiles%2F239874_253580_0_%2520%25C2%25A9%2520Mojtaba%2520Nobakht%252C%2520Iran%252C%2520Commended%252C%2520Open%2520Competition%252C%2520Portraits%252C%25202017%2520Sony%2520World%2520Photography%2520Awards.jpg&f=1&nofb=1" 
            name="Jane Doe" 
            role="UI/UX Engineer"/> 
        <Navbar />
        <div className="issue-container">
            <ul className="issue-list">
                <IssueList />
                <IssueList />
                <IssueList />
                <IssueList />
            </ul>
        </div>
      </div>
  );
}

export default Myissue;

