// create your App component here
import React, {Component} from 'react'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                people: data
            })
        })
    }

    render() {
        return(
            <div>
                {null}
            </div>
        )
    }
}
