import styled from 'styled-components';

const Username = styled.p`
    font-weight: 500;
    color: ${props => props.bold ? 'black' : '#505050'}
    margin: 0;
    font-size: 0.9rem;
`;

export default Username;