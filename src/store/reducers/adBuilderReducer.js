import * as actionTypes from '../actions/actionTypes';

const initialState = {
  newAd: {
    loading: false,
    id: null,
    message: '',    
    validations: [],
    posted: false,
    error: false,    
    new: false,
    unauthorized: false
  }  
}

const createNewAdStart = (state, action) => {
  return {
    newAd: {
      ...state.newAd,
      loading: true,
      validations: [
        ...state.newAd.validations
      ],
      unauthorized: false
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
      validations: [
        ...state.newAd.validations
      ],      
      posted: true
    }    
  }
}

const createNewAdFail = (state, action) => {
  return {
    newAd: {
      ...state.newAd,
      loading: false,
      message: action.resp.fail,
      validations: [
        ...action.validations
      ],
      error: true,   
      unauthorized: true   
    }
  }
}

const adPostingInit = (state , action) => {
  return {
    newAd: {
      ...state.newAd,
      validations: [
        ...state.newAd.validations
      ],
      posted: false,
      error: false,
    }
  }
}

const clearUnauthorizedState = (state , action) => {
  return {
    newAd: {
      ...state.newAd,
      validations: [
        ...state.newAd.validations
      ],
      posted: false,
      error: false,
      unauthorized: false
    }
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.CREATE_NEW_AD_START: return createNewAdStart(state, action);
    case actionTypes.CREATE_NEW_AD_SUCCESS: return createNewAdSuccess(state, action);
    case actionTypes.CREATE_NEW_AD_FAIL: return createNewAdFail(state, action);
    case actionTypes.AD_POSTING_INIT: return adPostingInit(state, action);
    case actionTypes.CLEAR_UNAUTHORIZED_STATE: return clearUnauthorizedState(state, action);
    default: return state; 
  } 
}

export default reducer;