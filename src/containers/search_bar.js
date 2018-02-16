import React from 'react';

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange = (evt) => {        
        const term = evt.target.value;
        this.setState({term});
    }

    onFormSubmit = (evt) => {
        evt.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    type="text"
                    placeholder="5 day forecast" 
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}