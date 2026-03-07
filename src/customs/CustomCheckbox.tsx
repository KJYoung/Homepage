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
        <CustomCheckBox type="checkbox" checked={checked} onChange={() => {}}/>
        <FontAwesomeIcon icon={faCheck}/>
    </CustomCheckWrapper>
}

const CustomCheckWrapper = styled.div<IPropsCheckWrapper>`
    width: 1.5rem;
    height: 1.5rem;

    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
        display: none;
        position: absolute;
        inset: 0;
        margin: auto;
        width: 0.9rem;
        height: 0.9rem;
        color: white;
        pointer-events: none;
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
    width: 100%;
    height: 100%;
    border: 1.5px solid gainsboro;
    border-radius: 0.35rem;

    position: relative;
    &:checked {
        border-color: black;
        background-color: transparent;
        background-color: limegreen;
    }
    cursor: pointer;
`;

export default CustomCheckbox;
