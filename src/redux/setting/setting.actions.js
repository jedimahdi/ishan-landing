import SettingActionTypes from './setting.types';

export const getSettings = settings => ({
  type: SettingActionTypes.GET_SETTINGS,
  payload: settings
});
