import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  FETCH_USER_PROFILE,
} from './actionTypes';
import { APIUrls } from '../helpers/urls';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';

export function startUserProfileFetch() {
  return {
    type: FETCH_USER_PROFILE,
  };
}

export function userProfileSuccess(user) {
  return {
    type: USER_PROFILE_SUCCESS,
    user,
  };
}

export function userProfileFail(error) {
  return {
    type: USER_PROFILE_FAIL,
    error,
  };
}

export function fetchUserProfile(userId) {
  return (dispatch) => {
    dispatch(startUserProfileFetch());

    const url = APIUrls.userProfile(userId);

    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        //since it needs authorization,we need to pass the bearer token that is the jwt token
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(userProfileSuccess(data.data.user));
          return;
        }

        dispatch(userProfileFail(data.message));
      });
  };
}
