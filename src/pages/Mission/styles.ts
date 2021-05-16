import styled from 'styled-components';

const StyledMission = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionMissionSummary = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1rem 1rem 0.5rem 1rem;
  overflow: hidden;
  background-color: red;
`;

const SectionMissionDescription = styled.div`
  overflow: auto;
`;

const SectionMissionInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex: 2;
`;

const Subsection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1rem;
  margin-top: 0.5rem;
  background-color: blue;
`;

const SubsectionLeft = styled(Subsection)`
  margin-right: 0.5rem;
`;
const SubsectionRight = styled(Subsection)`
  margin-left: 0.5rem;
`;

const SectionClocksMission = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionClocksOther = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  StyledMission,
  SectionMissionSummary,
  SectionMissionDescription,
  SectionMissionInfo,
  SubsectionLeft,
  SubsectionRight,
  SectionClocksMission,
  SectionClocksOther,
};
