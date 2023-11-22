import React from 'react';
import moment from 'moment/moment';

function Score(props) {
  const { scoreInfo } = props;
  const score = scoreInfo.map((elem) => elem.score);
  const dataPeriod = scoreInfo.map((elem) =>
    moment(elem.date).format('MMM Do YY')
  );
  const ave = score.reduce((acc, crr) => (acc += crr), 0) / score.length;
  const maxScore = Math.max(...score);
  const maxScoreDate = scoreInfo
    .filter((elem) => elem.score === maxScore)
    .map((elem) => elem.date);

  return (
    <>
      <section className="score_info">
        <h2>Score Report</h2>
        <ul>
          <li>
            Max : {maxScore} wpm <br />@{' '}
            {moment(maxScoreDate[0]).format('MMM Do YY')}
          </li>
        </ul>
        <ul>
          <li>
            Ave : {ave.toFixed(2)} wpm <br />
            From :{dataPeriod[0]} <br /> Latest :
            {dataPeriod[dataPeriod.length - 1]}
          </li>
        </ul>
      </section>
    </>
  );
}
export default Score;
