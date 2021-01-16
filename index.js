import express from 'express';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import jsonpatch from 'jsonpatch';
import thumbnail from 'image-thumbnail';

const app = express();
const jwtSecretToken = 'ahsdgf388394qaskaskdhkasd';
const users = [
  {
    username: 'john',
    password: '111000aaabbb'
  }, {
    username: 'doe',
    password: '000111bbbaaa'
  }
];

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader;
    jwt.verify(token, jwtSecretToken, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => {
    return user.username === username && user.password === password;
  });

  if (user) {
    const accessToken = jwt.sign({ username: user.username }, jwtSecretToken, { expiresIn: '1m' });
    res
      .json({
        accessToken
      })
      .status(200)
      .send();
  } else {
    res
      .status(401)
      .send();
  }
});

app.patch('/pathChange', authenticateJWT, (req, res) => {
  let { document, patch } = req.body;
  if (document && patch) {
    document = jsonpatch.apply_patch(document, patch);
    res
      .json(document)
      .status(200)
      .send();
  } else {
    res
      .status(400)
      .send();
  }
});

app.post('/thumbnail', authenticateJWT, (req, res) => {
  const { uri } = req.body;
  if (uri) {
    thumbnail({ uri }, { responseType: 'base64', jpegOptions: { force: true, quality: 100 } })
      .then(imageThumbnail => {
        res
          .json(imageThumbnail)
          .status(200)
          .send();
      })
      .catch(error => {
        res
          .json(error)
          .status(400)
          .send();
      });
  } else {
    res
      .status(200)
      .send();
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
