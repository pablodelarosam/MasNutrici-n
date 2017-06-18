
import * as constants from '../../constants'

export const login = data => dispatch => {
  dispatch({
    type: constants.USER_LOGGING_IN
  })
  // Wait 2 seconds before "logging in"
  setTimeout(() => {
    dispatch({
      type: constants.USER_LOGGED_IN,
      payload: data
    })
  }, 2000)
}
