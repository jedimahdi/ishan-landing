import { createSelector } from 'reselect';

const selectSettings = state => state.settings;

export const selectSettingItems = createSelector(
  [selectSettings],
  settings => settings.settingItems
);
