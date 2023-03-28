import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

interface IPropsCheckbox {
    checked: boolean,
    onClickListener : () => void;
};
interface IPropsCheckWrapper {
    checked: boolean
};
const CustomCheckbox = ({ checked, onClickListener }: IPropsCheckbox) => {
    return <CustomCheckWrapper checked={checked} onClick={onClickListener}>
        <CustomCheckBox type="checkbox" checked={checked}/>
        <FontAwesomeIcon icon={faCheck}/>
    </CustomCheckWrapper>
}

const CustomCheckWrapper = styled.div<IPropsCheckWrapper>`
    width: fit-content;
    height: fit-content;

    position: relative;
    svg {
        display: none;
        position: absolute;
        top: 16%;
        left: 18%;
    }
    ${({ checked }) =>
    checked &&
    `
      svg {
        display: block;
      }
    `}
`;
const CustomCheckBox = styled.input`
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border: 1.5px solid gainsboro;
    border-radius: 0.35rem;

    position: relative;
    &:checked {
        border-color: black;
        background-color: transparent;
        background-color: limegreen;
    }
`;

export default CustomCheckbox;