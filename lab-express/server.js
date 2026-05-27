const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static('public'));


app.get('/api/hello', (req, res) => {
  res.json({
    imie: "Ihor",
    nazwisko: "Kaniuk",
    indeks: "77372"
  });
});

app.listen(port, () => {
  console.log(`Сервер працює! Відкрий: http://localhost:${port}`);
});