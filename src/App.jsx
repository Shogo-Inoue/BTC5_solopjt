import { useEffect, useState } from 'react';
import Rank from './Rank';
import Score from './Score';
import './style/App.css';

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [scoreInfo, setScoreInfo] = useState([]);
  const [inputId, setInputId] = useState(1);

  const onClickHander = () => {
    let n = Number(inputId);
    n < 15 ? n++ : (n = 1);
    setInputId(n);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/users/${inputId}`);
        const res2 = await fetch(`/api/scores/${inputId}`);
        if (!(res.ok || res2.ok)) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const user = await res.json();
        setUserInfo(user);
        const score = await res2.json();
        setScoreInfo(score);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [inputId]);

  return (
    <>
      <div className="App">
        <header className="navbar">
          <nav>
            <h1>Typing Result</h1>
            <input
              value={inputId}
              onChange={(e) => setInputId(e.target.value)}
            />
            <button onClick={onClickHander}>Check</button>
          </nav>
        </header>
        <main>
          <Rank
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            scoreInfo={scoreInfo}
            inputId={inputId}
          />
          <Score scoreInfo={scoreInfo} />
          <div>
            <h2>Best Top3</h2>
            <ol>
              <li>###</li>
              <li>###</li>
              <li>###</li>
            </ol>
          </div>
        </main>
        <figure>
          <h2>Graph</h2>
          <img
            className="graph_area"
            src="https://source.unsplash.com/random"
            alt="sample img"
          />
        </figure>
      </div>
    </>
  );
}
export default App;
