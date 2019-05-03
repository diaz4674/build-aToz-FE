import axios from "axios";

export const FETCH_MOM_EXPERIENCES_SUCCESS = "FETCH_MOM_EXPERIENCES_SUCCESS";
export const FETCH_MOM_EXPERIENCES_FAIL = "FETCH_MOM_EXPERIENCES_FAIL";

export const experienceSuccessFetch = () => dispatch => {
  const headers =  {authorization: localStorage.getItem('token')}
  axios
    .get("https://webpt3-atoz-buildweek.herokuapp.com/api/atoz/home", {headers} )
    .then(res =>
      dispatch({ type: FETCH_MOM_EXPERIENCES_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: FETCH_MOM_EXPERIENCES_FAIL, payload: err }));
}

export const SEARCH_SUCCESS ='SEARCH_SUCCESS'
export const SEARCH_FAIL = 'SEARCH_FAIL'

export const searchExperiences = (search) => dispatch => {
   axios.get("https://webpt3-atoz-buildweek.herokuapp.com/api/atoz/home", search)
   .then(res => 
    dispatch({type: SEARCH_SUCCESS, payload: res.data})
    .catch(err => dispatch({type: SEARCH_FAIL, payload: err}))
    )
}

export const ADD_SELECTED_DATA = 'ADD_SELECTED_DATA'
export const ADD_SELECTED_FAIL = 'ADD_SELECTED_FAIL'

export const addSelectedData = (item) => dispatch => {
  dispatch({type: ADD_SELECTED_DATA, payload: item})
}

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  localStorage.removeItem("token");
  return axios
    .post("https://webpt3-atoz-buildweek.herokuapp.com/api/atoz/auth/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.status === "Error") {
        localStorage.removeItem("token");
      }
      dispatch({ type: LOGIN_FAILURE, payload: err.message });
    });
};


export const FETCHING_EVENT = "FETCHING_EVENT";
export const GET_EVENT = "GET_EVENT";
export const ADD_EVENT = "ADD_EVENT";
export const ADD_EVENT_FAIL = "ADD_EVENT_FAIL";

export const getEvent = id => dispatch => {
  const endpoint = `https://webpt3-atoz-buildweek.herokuapp.com/api/atoz/experiences/${id}`
  const headers =  {Authorization: localStorage.getItem("token")}
  axios
    .get(endpoint, {headers})
    .then(res => {
      dispatch({type: GET_EVENT, payload: res.data });
    })
};

export const postEvent = event =>  dispatch => {
  console.log(event)
  const headers =  {Authorization: localStorage.getItem("token")}
  console.log(headers)
  const endpoint = 'https://webpt3-atoz-buildweek.herokuapp.com/api/atoz/experience'

    axios
    .post(endpoint, event, {headers})
    .then(res => {
      dispatch({type: ADD_EVENT, payload: res.data });
    })
    .catch(err => dispatch({ type: ADD_EVENT_FAIL, payload: err }))
    };

export const FETCHING_SIGNUP = "FETCHING_SIGNUP";
export const GET_SIGNUP = "GET_SIGNUP";
export const ADD_SIGNUP = "ADD_SIGNUP";
export const ADD_SIGNUP_FAIL = "ADD_SIGNUP_FAIL";

export const getSignUp = () => {
  const promise = axios.get("http://localhost:5000/api/login");

  return function(dispatch) {
    dispatch({ type: FETCHING_SIGNUP });
    promise.then(response => {
      console.log(response);
      dispatch({ type: GET_SIGNUP, payload: response.data });
    });
  };
};

export const postSignUp = SignUp => dispatch =>{
    axios.post("https://webpt3-atoz-buildweek.herokuapp.com/api/atoz/auth/register", SignUp)
    .then(res => {
      dispatch({type: ADD_SIGNUP, payload: res.data });
    })
    .catch(err => dispatch({ type: ADD_SIGNUP_FAIL, payload: err }))
  };

  export const DELETED_STATE = "DELETED_STATE";

  export const deleteEvent = id => dispatch => {
    const headers =  {Authorization: localStorage.getItem("token")}
    axios
      .delete(`https://webpt3-atoz-buildweek.herokuapp.com/api/atoz/exp/${id}`, {headers})
      .then(res =>{
        console.log(res.data)
        // dispatch({type: DELETED_STATE, payload: res.data });
      })
  }

  export const UPDATED_OBJECTS = "UPDATED_OBJECTS";

  export const updateArrays = () => dispatch => {
    const headers =  {authorization: localStorage.getItem('token')}
    axios
      .get("https://webpt3-atoz-buildweek.herokuapp.com/api/atoz/home", {headers} )
      .then(res =>
        dispatch({ type: UPDATED_OBJECTS, payload: res.data })
      )
  }
