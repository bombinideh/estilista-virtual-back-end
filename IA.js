const { json } = require("body-parser");
const cors = require("cors");
const express = require("express");
const { combinations } = require("./combinations");

const app = express();

app.use(cors());
app.use(json());

app.post("/", (req, res) => {
  const combinacaoRecebida = req.body;

  console.log(req.body);

  for (const combination of combinations) {
    if (
      combinacaoRecebida.gender === combination.gender &&
      combinacaoRecebida.ocasion === combination.ocasion &&
      combinacaoRecebida.tshirt === combination.tshirt &&
      combinacaoRecebida.pants === combination.pants &&
      combinacaoRecebida.shoes === combination.shoes
    ) {
      res.status(200).json({ result: true });
      return;
    }
  }

  res.status(200).json({ result: false });
  return;
});

app.listen(3000, () => {
  console.log("API passando na porta 3000");
});
