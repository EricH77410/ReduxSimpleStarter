import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

 class SearchBar extends React.Component {

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

        this.props.fetchWeather(this.state.term);
        this.setState({ term:'' });
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
