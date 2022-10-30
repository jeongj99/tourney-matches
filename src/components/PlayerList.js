import { preparePlayerData, addWinsToPlayer } from '../helpers/playerHelpers';
import Player from './Player';

function PlayerList(props) {
  const playerDataArray = preparePlayerData(props.playerData);
  const parsedPlayerData = addWinsToPlayer(playerDataArray, props.matchData);
  const onePlayer = parsedPlayerData[0];
  return (
    <section className="PlayerList" >
      <h1>Current participating players</h1>
      <Player firstName={onePlayer.firstName} lastName={onePlayer.lastName} gamerTag={onePlayer.gamerTag} wins={onePlayer.wins} />
    </section>
  );
}

export default PlayerList;