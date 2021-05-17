import React, {Component, Fragment} from "react";
import Cards from "../components/Cards";
import "./RoboApp.css";
import ErrorBoundary from "../containers/ErrorBoundary"
import Scroll from "../components/Scroll"
import SearchBox from "../components/RoboAppSearchBox";
// import {robots} from "./robots";

class RoboApp extends Component {
    constructor () {
        super ();
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(user => this.setState({robots: user})).catch(error => console.log(error))
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        if (robots.length === 0) {
            return (
                <Fragment>
                    <div className="flex justify-center items-center">
                        <h1>Loading...</h1>
                    </div>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <div className="tc">
                        <h1 className="f1">RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <Cards robots={filteredRobots}/>
                            </ErrorBoundary>
                        </Scroll>
                    </div>  
                </Fragment>
            )
        }
        
    }
}

export default RoboApp;