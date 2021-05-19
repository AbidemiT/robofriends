import React, {Component, Fragment} from "react";
import Cards from "../components/Cards";
import "./RoboApp.css";
import {connect} from "react-redux";
import ErrorBoundary from "../containers/ErrorBoundary"
import Scroll from "../components/Scroll"
import SearchBox from "../components/RoboAppSearchBox";
// import {robots} from "./robots";

import {requestRobots, setSearchField} from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}

const mapDispatchToProps = (dispatch) => {
   return { 
       onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    //    onRequestRobots: () => requestRobots(dispatch)
       onRequestRobots: () => dispatch(requestRobots())
      }
}

class RoboApp extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        if (isPending) {
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
                        <SearchBox searchChange={onSearchChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(RoboApp);