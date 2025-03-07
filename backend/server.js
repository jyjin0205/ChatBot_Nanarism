const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // CORS 미들웨어 추가
app.use(express.json()); // JSON 요청을 파싱

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('서버 실행 중!');
});

userRouter.post('/sayHello', (req, res) => {
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: "나나리즘"
                    }
                }
            ]
        }
    };
    
    res.status(200).send(responseBody);
});

app.use('/api/users', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중...`);
});
