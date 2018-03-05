import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCity } from '../actions/index';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather = (cityData) => {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp-273.15);
    const pressures = cityData.list.map(pressure => pressure.main.pressure);
    const humidities = cityData.list.map(humidity => humidity.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>        
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Chart data={temps} color="orange" units="°C"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
        <td><button className="action" onClick={()=>this.removeCity(name)}>X</button></td>
      </tr>
    );
  }

  removeCity = (city) => {
    this.props.remove(city);
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>            
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  return { weather: state.weather }
}

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id)=>dispatch(deleteCity(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
