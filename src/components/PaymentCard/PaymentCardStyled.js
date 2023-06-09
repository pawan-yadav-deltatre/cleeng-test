import styled, { css } from 'styled-components';
import {
  MyAccountBlue,
  White,
  MainColor,
  CardSecondaryColor,
  IconsColor,
  paymentMethodColors
} from 'styles/variables';

export const CardStyled = styled.div`
  position: relative;

  height: 160px;

  background-color: ${MyAccountBlue};
  border-radius: 20px;

  overflow: hidden;

  &:after {
    position: absolute;
    left: 30%;
    bottom: -10px;
    display: block;
    content: '';

    height: 400px;
    width: 400px;

    border-radius: 50%;
    background-color: ${CardSecondaryColor};
  }
`;

export const CardTypeStyled = styled.div`
  position: absolute;
  left: 16px;
  top: 16px;
  height: 35px;
  z-index: 2;

  svg {
    height: 100%;
    width: auto;
  }
`;

export const CardNumberStyled = styled.div`
  position: absolute;
  top: 28px;
  right: 16px;
  color: ${White};
  font-size: 12px;
  z-index: 2;
`;

export const CardExpirationStyled = styled.div`
  position: absolute;
  bottom: 20px;
  left: 16px;
  color: ${White};
  font-size: 12px;
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

export const CardExpirationLabel = styled.div`
  color: ${IconsColor};
  font-size: 10px;
  margin-bottom: 4px;
  z-index: 2;
`;

export const CardExpirationDateStyled = styled.div`
  color: ${White};
  font-size: 12px;
  z-index: 2;
  max-width: 100px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const CardEditStyled = styled.button`
  position: absolute;
  bottom: 18px;
  right: 16px;
  color: ${MainColor};
  z-index: 2;

  padding: 9px 14px;
  background-color: ${White};
  font-size: 11px;
  font-weight: 600;
  border-radius: 17px;
  border: 0;
  box-shadow: 0px 3px 50px #00000014;

  &:hover {
    cursor: pointer;
  }
`;

export const CardWrapStyled = styled.div`
  width: 265px;
  font-family: Arial, Helvetica, sans-serif;

  ${props =>
    props.type !== '' &&
    css`
      ${CardStyled} {
        background-color: ${paymentMethodColors[`${props.type}MainColor`]};

        &:after {
          background-color: ${paymentMethodColors[
            `${props.type}SecondaryColor`
          ]};
        }
      }
    `}
`;

export const MethodNameStyled = styled.strong`
  text-transform: capitalize;
`;
