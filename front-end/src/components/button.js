import styled from 'styled-components';

const Button = styled.div `
    color: #24292e;
    background-color: #eff3f6;
    background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
    position: relative;
    display: inline-block;
    padding: 2px 12px;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-repeat: repeat-x;
    background-position: -1px -1px;
    background-size: 110% 110%;
    border: 1px solid rgba(27,31,35,0.2);
    border-radius: 0.25em;
    appearance: none;
`;

export default Button;