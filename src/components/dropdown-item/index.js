import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { toggleSite } from "../../state/actions/dropdown-status";
import { Item } from "./dropdown-item.styled";

const DropdownItem = ({ site, isSelected }) => {
  const dispatch = useDispatch();
  const onToggleSite = useCallback(
    (site, isSelected) => dispatch(toggleSite(site, isSelected)),
    []
  );

  return (
    <Item isSelected={isSelected}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={(e) => onToggleSite(site, e.target.checked)}
      />
      <span className="checkmark" />
      {site.url}
    </Item>
  );
};

DropdownItem.propTypes = {
  site: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default DropdownItem;
