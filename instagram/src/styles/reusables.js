import styled from 'styled-components';

const Username = styled.span`
    font-weight: ${props => props.bold ? '700' : '500'};
    margin: 0;
    font-size: 0.9rem;
`;

export default Username;