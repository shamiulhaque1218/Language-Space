import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  // ... other styles using theme variables
`;

const Example = () => (
  <StyledDiv>
    Your content here
  </StyledDiv>
);

export default Example;