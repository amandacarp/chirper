import React from 'react'
import Chirp from './Chirp'

class App extends React.Component {
    state = {
        chirps: [{
            chirpAuthor: "Amanda",
            chirpText: "hello"
        }]
    }


    render() {
        return (
            <>
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-light bg-secondary">
                            <span className="navbar-brand mb-0 h1">Chirper</span>
                        </nav>
                    </div>
                </div>
                {this.state.chirps.forEach(chirp => {
                    console.log(chirp);
                    <Chirp auth={chirp.chirpAuthor} txt={chirp.chirpText} />
                })}
            </>

        )
    }

}


export default App;