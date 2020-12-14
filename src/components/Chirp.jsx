import React from 'react'

class Chirp extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            chirpAuthor: this.props.auth,
            chirpText: this.props.txt
        }

    
    }
    render() {
        
        
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-4">
                                <div className="card-body">
                                    <h5 className="card-title">{this.state.chirpAuthor}</h5>
                                    <p className="card-text">{this.state.chirpText}</p>
                                    <button>Like Chirp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Chirp;