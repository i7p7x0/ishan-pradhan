import { SET_NAVIGATION } from "../actions/NavigationIndicator";
import { constPageComponents } from "../../../constants/constPageComponents";

const initialState = {
  home: true,
  aboutMe: false,
  resume: false,
  contact: false,
};

export const navigationIndicatorReducer = (state = initialState, action) => {
  if (action.type === SET_NAVIGATION) {
    let stateInitializer;
    switch (action.page) {
      case constPageComponents.aboutMe:
        stateInitializer = {
          home: false,
          aboutMe: true,
          resume: false,
          contact: false,
        };
        state = stateInitializer;
        break;
      case constPageComponents.resume:
        stateInitializer = {
          home: false,
          aboutMe: false,
          resume: true,
          contact: false,
        };
        state = stateInitializer;
        break;
      case constPageComponents.contact:
        stateInitializer = {
          home: false,
          aboutMe: false,
          resume: false,
          contact: true,
        };
        state = stateInitializer;
        break;
      default:
        state = initialState;
        break;
    }
    return state;
  }
  return state;
};
