import SettingActionTypes from './setting.types';

const INITIAL_STATE = {
  settingItems: []
};

const settingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SettingActionTypes.GET_SETTINGS:
      return { ...state, settingItems: action.payload };
    default:
      return state;
  }
};

export default settingReducer;
