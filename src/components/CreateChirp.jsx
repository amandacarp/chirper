import React from 'react'

class CreateChirp extends React.Component{
    state={
        chirpAuthor: '',
        chirpText: ''
    }

    handleAuthorChange = (e) => {
        this.setState({chirpAuthor: e.target.value})
    }

    handleTextChange = (e) => {
        this.setState({chirpText: e.target.value})
    }

    handleButtonClick = () => {
        let chirp = {
            chirpAuthor: this.state.chirpAuthor,
            chirpText: this.state.chirpText
        }
        this.props.logChirp(chirp)

        }

    
    render(){

        return(
            <>
            <h2>Create your Chirp Below!</h2>
            <input type="text" className="form-control" placeholder="Enter your username" onChange={(e)=>this.handleAuthorChange(e)}/>
            <input type="text" className="form-control" placeholder="Enter your message" onChange={(e)=>this.handleTextChange(e)}/>
            <button 
            className="btn btn-secondary" 
            onClick={this.handleButtonClick}>Create Chirp!</button>

            </>
        )
    }
}

export default CreateChirp;