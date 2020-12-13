import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);



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
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-4">
                                <div className="card-body">
                                    <h5 className="card-title">Title</h5>
                                    <p className="card-text">text</p>
                                    <button>Admin Options</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }

}


export default App;