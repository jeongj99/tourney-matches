import Player from './Player';

function PlayerList(props) {
  const onePlayer = props.playerData[0];
  return (
    <section className="PlayerList" >
      <h1>Current participating players</h1>
      <Player firstName={onePlayer.firstName} lastName={onePlayer.lastName} gamerTag={onePlayer.gamerTag} wins={onePlayer.wins} />
    </section>
  );
}

export default PlayerList;