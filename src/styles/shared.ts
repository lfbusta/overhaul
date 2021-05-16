import styled from 'styled-components';

const LargeTitle = styled.h1`
  font-size: 3.4rem;
  font-weight: regular;
  line-height: 4.1rem;
`;

const Title1 = styled.h1`
  font-size: 2.8rem;
  font-weight: regular;
  line-height: 3.4rem;
`;

const Title2 = styled.h2`
  font-size: 2.2rem;
  font-weight: regular;
  line-height: 2.8rem;
`;

const Title3 = styled.h3`
  font-size: 2.0rem;
  font-weight: regular;
  line-height: 2.5rem;
`;

const Headline = styled.h2`
  font-size: 1.7rem;
  font-weight: bold;
  line-height:2.2rem;
`;

const Body = styled.p`
  font-size: 1.7rem;
  font-weight: regular;
  line-height:2.2rem;
`;

const Callout = styled.p`
  font-size: 1.6rem;
  font-weight: regular;
  line-height:2.1rem;
`;

const Subhead = styled.p`
  font-size: 1.5rem;
  font-weight: regular;
  line-height:2.0rem;
`;

const Footnote = styled.p`
  font-size: 1.3rem;
  font-weight: regular;
  line-height:1.8rem;
`;

const Caption1 = styled.p`
  font-size: 1.2rem;
  font-weight: regular;
  line-height:1.6rem;
`;

const Caption2 = styled.p`
  font-size: 1.1rem;
  font-weight: regular;
  line-height:1.3rem;
`;

const FullScreenMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  color: white;
  font-size: 8rem;
`;

const StyledButton = styled.button`
  height: 4rem;
  min-width: 12rem;
  margin: 0;
  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colorPrimary};
  background-color: ${({ theme }) => theme.colorBackgroundPrimary};
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colorPrimary};
  cursor: pointer;
  &:active {
    background-color: red;
  }
`;

export {
  FullScreenMessage,
  LargeTitle,
  Title1,
  Title2,
  Title3,
  Headline,
  Body,
  Callout,
  Subhead,
  Footnote,
  Caption1,
  Caption2,
};
export { StyledButton };
