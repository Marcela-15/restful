const express = require('express');
const app = express();

module.exports = app;

app.use(express.json()); 

// Sumar n1 + n2
app.get('/results/:n1/:n2', (req, res) => {
  const { n1, n2 } = req.params;
  const resultado = parseFloat(n1) + parseFloat(n2);
  res.json({ resultado });
});

// Multiplicar n1 * n2
app.post('/results/1/2', (req, res) => {
  const { n1, n2 } = req.body;
  const resultado = parseFloat(n1) * parseFloat(n2);
  res.json({ resultado });
});

// Dividir n1 / n2
app.put('/results', (req, res) => {
  const { n1, n2 } = req.body;
  const resultado = parseFloat(n1) / parseFloat(n2);
  res.json({ resultado });
});

// Potencia n1 ^ n2
app.patch('/results', (req, res) => {
  const { n1, n2 } = req.body;
  const resultado = Math.pow(parseFloat(n1), parseFloat(n2));
  res.json({ resultado });
});

// Restar n1 - n2
app.delete('/results/:n1/:n2', (req, res) => {
  const { n1, n2 } = req.params;
  const resultado = parseFloat(n1) - parseFloat(n2);
  res.json({ resultado });
});

app.listen(2000);