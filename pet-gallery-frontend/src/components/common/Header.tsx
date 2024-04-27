import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #fff;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Header = () => (
  <StyledHeader>
    <h1>Pet Gallery</h1>
  </StyledHeader>
);

export default Header;
