import React, { useState } from "react";
import { get } from "lodash";
import { useSelector } from "react-redux";
import DropdownContent from "../dropdown-content";
import {
	DropdownContainer,
	Button,
	ButtonContent,
	ButtonInfo,
	ButtonLabel,
	ButtonTitle,
	Arrow,
} from "./dropdown.styled";

const DropDown = () => {
	const [isDropdownVisible, setDropdownVisibility] = useState(false);

	const allSitesLength = useSelector((state) =>
		get(state, "dropdownStatus.allSites.length", 0)
	);
	const selectedSitesLength = useSelector((state) =>
		get(state, "dropdownStatus.selectedSites.length", 0)
	);
	const dropdownTitle =
		allSitesLength === selectedSitesLength
			? "All Sites"
			: `${selectedSitesLength} ${
				selectedSitesLength === 1 ? "Site" : "Sites"
			}`;

	return (
		<DropdownContainer>
			<Button onClick={() => setDropdownVisibility(!isDropdownVisible)}>
				<ButtonContent>
					<i className="fas fa-link" />
					<ButtonInfo>
						<ButtonLabel>Sites</ButtonLabel>
						<ButtonTitle>{dropdownTitle}</ButtonTitle>
					</ButtonInfo>
				</ButtonContent>
				<Arrow>
					<i className={`fas fa-caret-${isDropdownVisible ? "down" : "up"}`} />
				</Arrow>
			</Button>
			{isDropdownVisible && <DropdownContent />}
		</DropdownContainer>
	);
};

export default DropDown;
