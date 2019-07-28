import React from 'react';
import styled from 'styled-components';
import { Link as A } from 'react-router-dom';

const Base = ({ url, children, ...props }) => (
    <A to={url}>{children}</A>
)

const Link = styled(Base)`
	color: palevioletred;
	font-weight: bold;
`;

export default Link;