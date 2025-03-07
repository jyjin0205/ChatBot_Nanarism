const express = require('express');
const cors = require('cors');

const userRouter = express.Router();

const app = express();
app.use(express.json());

app.use('/api/users',userRouter);

userRouter.post('/sayHello', function(req,res) {
    const responseBody = {
        version: "2.0",
        template: {
          outputs: [
            {
              simpleText: {
                text: "hello I'm Ryan"
              }
            }
          ]
        }
      };
    
      res.status(200).send(responseBody);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);