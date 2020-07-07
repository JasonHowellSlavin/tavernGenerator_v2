import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Admin from './components/Admin';
import Nav from './components/Nav';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [],
            dailyStats: [],
            dailyNav: 'daily-stats',
            overallNav: 'overall-stats',
            nav: [
                {path: '/', title: 'Home'},
                {path: '/forms', title: 'Admin'},
                {path: '/apple', title: "Apple"}
            ]
        };
    }

    componentDidMount() {
        let overAllStats;
        let dailyStats;

        let dateObj = new Date();
        let dateString = `${dateObj.getUTCFullYear()}-${dateObj.getUTCMonth() + 1}-${dateObj.getDate()}`;

        (async () => {
        //     const daily = await fetch('/stats/daily-stats', {
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({date: dateString}),
        //   });

          const words = fetch('/admin')
          .then(response => response.json())
          .catch(err => console.log(err));

          let tavernWords = await words;
        //   dailyStats = await daily.json();

          await this.setState({words: tavernWords});
        })();
    }

    render() {
        return (
                <div className="App">
                    <Router>
                        <Nav links={this.state.nav}></Nav>
                        <article>
                            <Switch>
                                <Route exact path="/">
                                    <section className={'wrapper input-section'}>
                                        <h1>Tavern Generator</h1>
                                    </section>
                                </Route>
                                <Route exact path="/forms">
                                    <section className={'wrapper input-section'}>
                                        <Admin/>
                                    </section>
                                </Route>
                                <Route path="/apple">
                                    <h1>Apple</h1>
                                </Route>
                            </Switch>
                        </article>
                    </Router>
                </div>
        );
    }
}

export default App;
