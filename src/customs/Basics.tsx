import styled from "styled-components";

export interface IPropsBasicCSS {
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    marginBottom?: string;
    fontWeight?: number;
    backgroundColor?: string;
};

// Basic Elements: SPAN, Button, Div
export const BasicSPAN = styled.span<IPropsBasicCSS>`
    margin-left: ${({ marginLeft }) => marginLeft};
    margin-right: ${({ marginRight }) => marginRight};
    margin-top: ${({ marginTop }) => marginTop};
    margin-bottom: ${({ marginBottom }) => marginBottom};

    font-weight: ${({ fontWeight }) => fontWeight};

    .bold {
        font-weight: 600;
    }
`;

export const BasicBUTTON = styled.span<IPropsBasicCSS>`
    margin-left: ${({ marginLeft }) => marginLeft};
    margin-right: ${({ marginRight }) => marginRight};
    margin-top: ${({ marginTop }) => marginTop};
    margin-bottom: ${({ marginBottom }) => marginBottom};
    font-weight: ${({ fontWeight }) => fontWeight};

    width: fit-content;
    height: fit-content;

    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;

    border-radius: 20px;

    background-color: ${({ backgroundColor = 'hp-blue' }) => getRGBfromVar(backgroundColor)};
    &:hover {
        background-color: ${({ backgroundColor = 'hp-blue' }) => generateHoverColor(getRGBfromVar(backgroundColor))};
    }
    &:active {
        background-color: ${({ backgroundColor = 'hp-blue' }) => generateActiveColor(getRGBfromVar(backgroundColor))};
    }
    
    cursor: pointer;
`;

export const BasicDIV = styled.span<IPropsBasicCSS>`
    margin-left: ${({ marginLeft }) => marginLeft};
    margin-right: ${({ marginRight }) => marginRight};
    margin-top: ${({ marginTop }) => marginTop};
    margin-bottom: ${({ marginBottom }) => marginBottom};
`;








// Clickable: Default, Hover, Active의 Color Scheme을 정해야 함.

// 용례] getRGBfromVar('hp-blue'); // Returns "#4e8cff"
export const getRGBfromVar = (vartext: string): string => {
    // Get computed style of :root element
    const rootStyles = getComputedStyle(document.documentElement);

    // Extract hex color value corresponding to the provided variable name
    const colorVar = rootStyles.getPropertyValue(`--${vartext}`).trim();

    // Convert hex color value to #RRGGBB format
    const hexToRRGGBB = (hex: string): string => {
        return hex.startsWith('#') ? hex : `#${hex}`;
    };

    return hexToRRGGBB(colorVar);
};

export const generateHoverColor = (hexColor: string) : string => {
    // 주어진 16진수 색상 코드를 RGB 값으로 변환
    const r = parseInt(hexColor.substring(1, 2), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);

    // Hover 상태에 대한 RGB 값 조정
    const hoverR = Math.min(r + 20, 255); // R 채널을 20 증가
    const hoverG = Math.min(g + 20, 255); // G 채널을 20 증가
    const hoverB = Math.min(b + 20, 255); // B 채널을 20 증가

    // RGB 값을 다시 16진수로 변환하여 반환
    const result = `#${hoverR.toString(16).padStart(2, '0')}${hoverG.toString(16).padStart(2, '0')}${hoverB.toString(16).padStart(2, '0')}`;
    return result;
}

export const generateActiveColor = (hexColor: string) : string => {
    // 주어진 16진수 색상 코드를 RGB 값으로 변환
    const r = parseInt(hexColor.substring(1, 2), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);

    // Active 상태에 대한 RGB 값 조정
    const activeR = Math.max(r - 20, 0); // R 채널을 20 감소
    const activeG = Math.max(g - 20, 0); // G 채널을 20 감소
    const activeB = Math.max(b - 20, 0); // B 채널을 20 감소

    // RGB 값을 다시 16진수로 변환하여 반환
    const result = `#${activeR.toString(16).padStart(2, '0')}${activeG.toString(16).padStart(2, '0')}${activeB.toString(16).padStart(2, '0')}`;
    return result;
}

