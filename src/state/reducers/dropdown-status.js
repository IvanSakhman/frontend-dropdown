import * as constants from "../constants/dropdown-status";

const defaultState = {
  allSites: [],
  selectedSites: [],
};

export const dropdownStatus = (state = defaultState, { type, data }) => {
  let newState = Object.assign({}, state);
  switch (type) {
    case constants.FETCH_SITES: {
      return {
        ...state,
        allSites: data,
      };
    }
    case constants.TOGGLE_SITE: {
      if (data.isSelected) {
        return {
          ...state,
          selectedSites: [...state.selectedSites, data],
        };
      }
      return {
        ...state,
        selectedSites: state.selectedSites.filter(
          (site) => site.id !== data.id
        ),
      };
    }
    case constants.SELECT_ALL_SITES: {
      return {
        ...state,
        selectedSites: state.allSites,
      };
    }
    case constants.RESET_SELECTED_SITES: {
      return {
        ...state,
        selectedSites: [],
      };
    }
    default:
      return newState;
  }
};
