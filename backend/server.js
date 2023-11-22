import express from 'express';
import cors from 'cors';
import userInfo from './user.js';
// import path from 'path';

//Express setting : start
const app = express();
app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
// app.set('views', `${__dirname}/templates`);
// app.use(express.static(path.join(__dirname, 'public')));

//End : Express setting

//Controller for API : start
const userInfoFunc = async (req, res) => {
  const userId = Number(req.params.id);
  const user = await userInfo.getById(userId);
  res.send(user);
};

const scoreInfoFunc = async (req, res) => {
  const userId = Number(req.params.id);
  const score = await userInfo.getByScore(userId);
  res.send(score);
};
//End : Controller for API

//API : start
app.get('/api/users/:id', userInfoFunc);
app.get('/api/scores/:id', scoreInfoFunc);
//End : API

//Localhost setting
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
