// From SWPP Project. KJYOUNG copyright.
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { getContrastYIQ } from '../utils/Color';

interface IPropsTagBubble {
  color?: string;
  isPrime?: boolean;
}

interface IPropsTagBubbleX {
  testId?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const TagBubbleX = ({ testId, onClick }: IPropsTagBubbleX) => (
  <TagBubbleXstyle data-testid={testId} onClick={onClick}>
    <FontAwesomeIcon icon={faX} />
  </TagBubbleXstyle>
);

export const TagBubbleXstyle = styled.div`
  margin-left: 5px;
  font-size: 10px;
  color: red;
  width: fit-content;
  height: fit-content;
  display: block;
  cursor: pointer;
`;

export const TagBubble = styled.button<IPropsTagBubble>`
  height: 20px;
  width: fit-content;
  border-radius: 25px;
  padding: 1px 12px;
  border: none;
  white-space: nowrap;
  margin: 1px 3px;
  ${({ color }) =>
    color &&
    `
      background: ${color};
      color: ${getContrastYIQ(color)};
    `}
  ${({ isPrime }) =>
    isPrime &&
    `
      border: 2px solid black;
    `}
`;
