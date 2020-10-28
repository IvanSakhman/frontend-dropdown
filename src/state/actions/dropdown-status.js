import * as constants from "../constants/dropdown-status";

export const fetchSites = (data) => ({
  type: constants.FETCH_SITES,
  data,
});
export const toggleSite = (site, isSelected) => ({
  type: constants.TOGGLE_SITE,
  data: { ...site, isSelected },
});
export const selectAllSites = () => ({
  type: constants.SELECT_ALL_SITES,
});
export const resetSelectedSites = () => ({
  type: constants.RESET_SELECTED_SITES,
});
