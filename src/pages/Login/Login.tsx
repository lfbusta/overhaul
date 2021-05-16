import React, { ReactElement } from 'react';
import { StyledLogin, StyledButton } from './styles';
import { getPlayerGroup } from '../../services/firebase';

export default function Login(): ReactElement {
  async function handleClick(): Promise<void> {
    const playerGroupId = 't26mULp1Yzn8YzeE502S';
    const result = await getPlayerGroup(playerGroupId);
    if (result.exists) {
      console.debug(result.data());
    } else {
      console.error('Error', result.error);
    }
  }

  return (
    <StyledLogin>
      <StyledButton type="button" onClick={handleClick}>
        Ping!
      </StyledButton>
    </StyledLogin>
  );
}
