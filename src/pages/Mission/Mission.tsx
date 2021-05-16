import React, { useEffect, ReactElement, useState } from 'react';
import { get } from 'lodash';
import {
  LargeTitle, Body, Title2, FullScreenMessage,
} from '../../styles/shared';
import { fetchPlayerGroup, fetchMission } from '../../services/firebase';
import {
  StyledMission,
  SectionMissionSummary,
  SectionMissionDescription,
  SectionMissionInfo,
  SubsectionLeft,
  SectionClocksMission,
  SectionClocksOther,
  SubsectionRight,
} from './styles';

export default function MissionPage(): ReactElement {
  const [playerGroup, setPlayerGroup] = useState(null);
  const [mission, setMission] = useState(null);

  useEffect(() => {
    // TODO: remove hadcorded ids.
    const playerGroupId = 't26mULp1Yzn8YzeE502S';
    fetchPlayerGroup(playerGroupId).then((data) => { setPlayerGroup(data); });
    const missionId = 'tIOkGBlgXBzvcG1VgWuz';
    fetchMission(missionId).then((data) => { setMission(data); });
  }, []);

  if (!mission || !playerGroup) return <FullScreenMessage>Loading...</FullScreenMessage>;
  return (
    <StyledMission>
      <SectionMissionSummary>
        <LargeTitle>{get(mission, 'displayName')}</LargeTitle>
        <SectionMissionDescription>
          <Body>
            {get(mission, 'description')}
          </Body>
        </SectionMissionDescription>
      </SectionMissionSummary>
      <SectionMissionInfo>
        <SubsectionLeft>
          <SectionClocksMission>
            <Title2>Mission Clocks</Title2>
          </SectionClocksMission>
          <SectionClocksOther>
            <Title2>Other Clocks</Title2>
          </SectionClocksOther>
        </SubsectionLeft>
        <SubsectionRight>
          <Title2>Right Section</Title2>
        </SubsectionRight>
      </SectionMissionInfo>
    </StyledMission>
  );
}
