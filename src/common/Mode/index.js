import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SpecialText from "../SpecialText";
import { switchDarkMode } from "../themeSlice";
import ModeIcon from "./ModeIcon";
import { Wrapper, CheckboxLabel, HiddenCheckbox, CheckboxContainer } from "./styled";

export default () => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
    const [modeText, setModeText] = useState("off");

    const onCheckedChanged = ({ target }) => {
        setChecked(target.checked);
        setModeText(checked ? "off" : "on");
        dispatch(switchDarkMode());
    };

    return (
        <Wrapper>
            <SpecialText
                content={`dark mode ${modeText}`}
            />
            <CheckboxContainer>
                <CheckboxLabel
                    checked={checked}>
                    <ModeIcon />
                    <HiddenCheckbox
                        onChange={onCheckedChanged}
                    />
                </CheckboxLabel>
            </CheckboxContainer>
        </Wrapper >
    )
};