import './App.css';
import matchData from './data/matchData';
import playerData from './data/playerData';
import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import { preparePlayerData, addWinsToPlayer } from './helpers/playerHelpers';

function App() {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayer(playerDataArray, matchData);
  return (
    <div className="App">
      <h1>Tourney Matches <span>Where Coding and Tournaments found their Match</span>
      </h1>
      <PlayerList playerData={parsedPlayerData} />
      <MatchList matchData={matchData} />
    </div>
  );
};

export default App;
