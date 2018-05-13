import * as actionTypes from '../actions/actionTypes';

const initialState = {
  newAd: {
    loading: false,
    id: null,
    message: '',
    posted: false,
    validations: [],
    error: null
  }  
}

const createNewAdStart = (state, action) => {
  return {
    newAd: {
      ...state.newAd,
      loading: false,
      id: action.resp.id,
      message: action.resp.message,
      posted: true
    }
  }
}

const createNewAdSuccess = (state, action) => {
  return {
    newAd: {
      ...state.newAd,
      loading: false,    
      id: action.resp.id,
      message: action.resp.success,
      posted: true
    }    
  }
}

const createNewAdFail = (state, action) => {
  return {
    newAd: {
      loading: false,
      id: null,
      message: action.message.fail,
      posted: false,
      validations: [
        action.validations
      ],
      error: true
    }
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.CREATE_NEW_AD_START: return createNewAdStart(state, action);
    case actionTypes.CREATE_NEW_AD_SUCCESS: return createNewAdSuccess(state, action);
    case actionTypes.CREATE_NEW_AD_FAIL: return createNewAdFail(state, action);
    default: return state; 
  } 
}

export default reducer;