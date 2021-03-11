import AppHeader from './app-header';

function Dashboard() {
  return (
    <div className="dashboard-container">
        <AppHeader 
            img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.worldphoto.org%2Fsites%2Fdefault%2Ffiles%2F239874_253580_0_%2520%25C2%25A9%2520Mojtaba%2520Nobakht%252C%2520Iran%252C%2520Commended%252C%2520Open%2520Competition%252C%2520Portraits%252C%25202017%2520Sony%2520World%2520Photography%2520Awards.jpg&f=1&nofb=1" 
            name="Jane Doe" 
            role="UI/UX Engineer"/>
        <div className="dashboard-stats">
            <div className="columns">
                <div class="column">
                    <div className="stat-container form">
                        <div className="heading">
                            <h1 className="title is-size-3 has-text-centered">2</h1>
                            <p className="subtitle is-size-6 has-text-centered is-capitalized">issues resolved today</p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div className="stat-container form">
                        <div className="heading">
                            <h1 className="title is-size-3 has-text-centered">5</h1>
                            <p className="subtitle is-size-6 has-text-centered is-capitalized">issues resolved in the past 7 days</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div class="column">
                    <div className="stat-container form">
                        <div className="heading">
                            <h1 className="title is-size-3 has-text-centered">9</h1>
                            <p className="subtitle is-size-6 has-text-centered is-capitalized">issues resolved in the past 31 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;


