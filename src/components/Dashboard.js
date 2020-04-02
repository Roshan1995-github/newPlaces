import React from 'react';
import Navbar from '../components/Navbar'
import Main from '../components/Main'
//import Copyright from '../components/Copyright'
import { Redirect } from 'react-router-dom';


class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            cakes: [],
            token: " "
        }

    }
    componentDidMount() {
        let token = localStorage.getItem("token")
        if (token) {
            this.setState({
                token: token
            })
        }
        fetch(`https://slcakes.herokuapp.com/api/cakes`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        cakes: result.data
                    })
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error)
                }
            )
    }

    render() {
        if (this.state.token == null || this.state.token == " ") {
            return (
                <div>Unauthorized</div>
            );
        }
        else {
            return (
                <div>
                    <Navbar />
                    <main>
                        <Main cakes={this.state.cakes} />
                    </main>
                    {/*<Copyright/>*/}

                </div>
            );
        }
    }
}

export default Dashboard;