import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get } from "lodash";
import DropdownItem from "../dropdown-item";
import {
  selectAllSites,
  resetSelectedSites,
} from "../../state/actions/dropdown-status";
import {
  Container,
  SearchContainer,
  IconContainer,
  Search,
  SelectButton,
  ButtonLabel,
  FilterButton,
} from "./dropdown-content.styled";

const DropdownContent = () => {
  const allSites = useSelector((state) =>
    get(state, "dropdownStatus.allSites", [])
  );
  const selectedSites = useSelector((state) =>
    get(state, "dropdownStatus.selectedSites", [])
  );
  const dispatch = useDispatch();
  const onSelectAllSites = useCallback(() => dispatch(selectAllSites()), []);
  const onResetSelectedSites = useCallback(
    () => dispatch(resetSelectedSites()),
    []
  );

  const [visibleSites, setVisibleSites] = useState(allSites);

  const logAllSites = () => {
    console.log("all selected sites", selectedSites);
  };

  const onSearch = (e) => {
    setVisibleSites(
      allSites.filter((site) => site.url.includes(e.target.value))
    );
  };

  return (
    <Container>
      <SearchContainer>
        <IconContainer>
          <i className="fas fa-search" />
        </IconContainer>
        <Search onChange={onSearch} placeholder="Search Site" />
      </SearchContainer>
      <SelectButton onClick={onSelectAllSites}>
        <i className="fas fa-plus-circle" />
        <ButtonLabel>Select all</ButtonLabel>
      </SelectButton>
      <SelectButton onClick={onResetSelectedSites}>
        <i className="fas fa-times-circle" />
        <ButtonLabel>Select none</ButtonLabel>
      </SelectButton>
      {visibleSites.map((site) => (
        <DropdownItem
          key={site.id}
          site={site}
          isSelected={selectedSites.some(
            (selectedSite) => selectedSite.id === site.id
          )}
        />
      ))}
      <FilterButton onClick={logAllSites}>Filter</FilterButton>
    </Container>
  );
};

export default DropdownContent;
