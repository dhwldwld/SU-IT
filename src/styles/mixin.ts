import {theme} from '../styles/theme';
import { css, FlattenSimpleInterpolation } from 'styled-components';

export const laptop = (content: FlattenSimpleInterpolation) =>
    css`
        @media only screen and (max-width: ${theme.deviceSizes.Laptop}) {
            ${content}
        }
    `;
export const mobile = (content: FlattenSimpleInterpolation) =>
    css`
        @media only screen and (max-width: ${theme.deviceSizes.MobileL}) {
            ${content}
        }
    `;
export const tablet = (content: FlattenSimpleInterpolation) =>
    css`
        @media only screen and (max-width: ${theme.deviceSizes.Tablet}) {
            ${content}
        }
    `;
export const DesktopS = (content: FlattenSimpleInterpolation) =>
css`
    @media only screen and (max-width: ${theme.deviceSizes.DesktopS}) {
        ${content}
    }
`;
export const DesktopM = (content: FlattenSimpleInterpolation) =>
    css`
        @media only screen and (max-width: ${theme.deviceSizes.DesktopM}) {
            ${content}
        }
    `;
export const DesktopL = (content: FlattenSimpleInterpolation) =>
css`
    @media only screen and (max-width: ${theme.deviceSizes.DesktopL}) {
        ${content}
    }
`;