import React, { useState } from "react";
import SpecialText from "../SpecialText";
import ModeIcon from "./ModeIcon";
import { Wrapper, CheckboxLabel, HiddenCheckbox, CheckboxContainer } from "./styled";

export default () => {
    const text = "dark mode ";
    const [checked, setChecked] = useState(false);
    const [modeText, setModeText] = useState(`${text} off`);

    const onCheckedChanged = ({ target }) => {
        setChecked(target.checked);
        setModeText(`${text}${checked ? "off" : "on"}`);
    };

    return (
        <Wrapper>
            <SpecialText
                content={modeText}
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