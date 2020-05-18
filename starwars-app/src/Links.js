import React from 'react';
import {  BrowserRouter as Switch, Router, Route, Link} from 'react-router-dom';

class Links extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            charList: [],
            loading: true
        };
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => {
            this.setState({ charList: data.results, loading: false })
        })
        .catch(error => {
            this.setState({error: true, loading: false})
        })
    }

    render() {
        const { charList } = this.state;


        return (
                    <ul>
                    {charList.map(char => 
                            <li key={char.name}><Link to={"/" + char.name.split(" ")[0]}>{char.name}</Link></li>
                            )}
                    </ul>
        );
    }
}

export default Links;