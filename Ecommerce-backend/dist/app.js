import express from 'express';
const port = 8000;
const app = express();
app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}`);
});
