import styled from 'styled-components';

export const TitleSection = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 51px;
    padding: 24px;
    text-align: center;
`

export const MainTitle = styled.span`
    font-size: 52px;
    font-family: Rye;
`
export const BlueTitle = styled.span`
    color: #09A7BC;
`
export const TriangleTopRight = styled.div`
    position: absolute;
    width: 0; 
    height: 0;
    top: 0;
    right: 0;
    border-top: 150px solid #09A7BC;
    border-bottom: 150px solid transparent;
    border-left: 150px solid transparent;
`
export const TriangleBottomLeft = styled.div`
    position: absolute;
    width: 0; 
    height: 0;
    bottom: 0;
    left: 0;
    border-top: 150px solid transparent;
    border-bottom: 150px solid #09A7BC;
    border-right: 150px solid transparent;
`