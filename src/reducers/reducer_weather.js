import { FETCH_WEATHER, DELETE_CITY } from '../actions/index'


export default function(state = [], action){
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
    case DELETE_CITY: {
      return state.filter((city)=>{
        return city.city.name != action.payload;
      });
    }
    default:
      return state;
  }

  return state;
}
