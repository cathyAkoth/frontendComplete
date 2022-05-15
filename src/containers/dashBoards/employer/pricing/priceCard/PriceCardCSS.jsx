import styled, { css } from 'styled-components';

const gradient = degs => css`
    background:
        linear-gradient(
            ${degs || 130}deg,
            #00dbde 0%,
            #fc00ff 100%
        );
`;

export const Card = styled.div`
    position: relative;
    overflow: hidden;
    width: 300px;
    padding: 3rem 0 2rem;
    margin-right: 50px;
    border-radius: 0.5rem;
    color: #fff;
    ${gradient()};
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
            0 9px 46px 8px rgba(0, 0, 0, 0.025),
            0 11px 15px -7px rgba(0, 0, 0, 0.025);
    
    &::after {
        content: "";
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        ${gradient(-50)};
        transition: opacity 0.75s;
    }
    &:hover::after { opacity: 1;}
`;

export const Content = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    flex: 0 0 auto;
    margin-bottom: 2rem;
    border-radius: 50%;
    font-size: 40px;
    color: #fff;
    ${gradient()};
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.025);
`;

export const PlanTitle = styled.div`
    font-size: 1.25rem;
`;

export const PlanContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
`;

export const PlanCost = styled.div`
    font-size: 2rem;
`;

export const Price = styled.span`
    font-weight: bold;
    font-size: 50px;
`;

export const FeatureListItem = styled.div`
    display: flex;
    aligh-items: center;
    justify-content: center;
    margin-bottom: 0.325rem;

    & > i {
        font-size: 20px;
        margin-right: 0.5rem
    }
`;

export const ActionButton = styled.button`
    flex: 0 0 auto;
    height: 40px;
    padding: 0 2rem;
    margin-top: 1rem;
    border: 0;
    border-radius: 20px;
    color: rgba(0, 0, 0, 0.85);
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.025);
    transition: background 0.25s;
    cursor: pointer;

    &:hover { background: rgba(255, 255, 255, 1); }
`;

export const BackgroundSquare = styled.div`
    position: absolute;
    z-index: 2;
    top: 52%;
    left: 0%;
    width: 200%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(-3deg);
`;