import React from 'react'

class Chirp extends React.Component {
   
    render() {
        let {chirpAuthor, chirpText} = this.props;
        
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-4 shadow">
                                <div className="card-body">
                                    <h5 className="card-title border-bottom border-info">{chirpAuthor}</h5>
                                    <p className="card-text border-bottom border-info">{chirpText}</p>
                                    <button className="btn btn-info btn-sm">Like Chirp</button>
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