import { Reducer } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './state';
import createReducer from 'util/CreateReducer';
import api from 'services/api';

export enum AuthTypes {
  AuthStart = '@auth/AuthStart',
  AuthSuccess = '@auth/AuthSuccess',
  AuthFailure = '@auth/AuthFailure',
}

export type Actions = {
  AuthStart: { type: AuthTypes.AuthStart };
  AuthSuccess: { type: AuthTypes.AuthSuccess; payload: any };
  AuthFailure: { type: AuthTypes.AuthFailure; payload: any };
};

export interface LoadingSection {
  'loading.auth': boolean;
}

export interface AuthState {
  data: any;
  loading: LoadingSection;
  error: any;
}

export const InitialState: AuthState = {
  data: {},
  loading: {
    'loading.auth': false,
  },
  error: undefined,
};

export const authReducer: Reducer<AuthState> = createReducer(InitialState, {
  [AuthTypes.AuthStart](state: AuthState) {
    state.loading['loading.auth'] = true;
    return state;
  },
  [AuthTypes.AuthSuccess](state: AuthState, action: Actions['AuthSuccess']) {
    state.loading['loading.auth'] = false;
    state.error = undefined;
    return state;
  },
  [AuthTypes.AuthFailure](state: AuthState, action: Actions['AuthFailure']) {
    state.loading['loading.auth'] = false;
    state.error = action.payload;
    return state;
  },
});

export function handleAuth(auth: any): ThunkAction<Promise<any>, RootState, any, any> {
  return async (dispatch, _): Promise<any> => {
    dispatch({ type: AuthTypes.AuthStart } as Actions['AuthStart']);
    return new Promise((resolve, reject) => {
      api
        .post('/login', {
          ...auth,
        })
        .then((response: any) => {
          dispatch({
            type: AuthTypes.AuthSuccess,
            payload: response.data,
          });
          resolve(response);
        })
        .catch((err: any) => {
          dispatch({
            type: AuthTypes.AuthFailure,
            payload: err.response ? err.response.data : { message: 'Impossivel se conectar, verifique sua internet' },
          });
          reject();
        });
    });
  };
}
