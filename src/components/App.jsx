import React from 'react'
import Chirp from './Chirp'
import CreateChirp from './CreateChirp'

class App extends React.Component {
    state = {
        chirps: [{
            chirpAuthor: "Amanda",
            chirpText: "hello"
        }, {
            chirpAuthor: "Matt",
            chirpText: "hello world"
        }, {
            chirpAuthor: "Alex",
            chirpText: "how are you?"
        }]
    }

    createChirp = (chirp) => {
        this.setState({chirps: [chirp, ...this.state.chirps]})
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-light bg-secondary">
                            <span className="navbar-brand mb-0 h1">Chirper</span>
                        </nav>
                        <CreateChirp logChirp={this.createChirp} />
                    </div>
                </div>
                {this.state.chirps.map((chirp, index) => {
                    return <Chirp key={index} {...chirp} />
                })}
            </>

        )
    }

}


export default App;