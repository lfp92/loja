const app = require("express")();

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type");
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

let data = [
  {
    id: "1",
    name:
      "Memória HyperX Fury, 8GB, 2400MHz, DDR4, CL15, Preto - HX424C15FB3/8",
    price: "291,65",
    description:
      "A Memória RAM HyperX FURY DDR4 apresenta um visual incrível com um dissipador de calor atualizado. Com um potencial incrível para você performar em alto nível, ela conta com overclock automático Plug & Play para módulos de velocidades até 2666MHz, sendo compatível com as mais recentes CPUs Intel e AMD. A Memória RAM HyperX FURY DDR4 possui garantia vitalícia, sendo uma atualização excelente e com preço acessível para fazer com que você tenha um desempenho incrível no seu jogo preferido. Sinta a verdadeira fúria das Memórias HyperX e tenha uma experiência jamais vivenciada antes."
  },
  {
    id: "2",
    name:
      "Processador AMD Ryzen 5 1600, Cache 19MB, 3.2GHz (3.6GHz Max Turbo), AM4 - YD1600BBAFBOX",
    price: "764,59",
    description:
      "Com esse processador inovador e incrível você desfruta ao máximo o verdadeiro potencial do seu computador e desfruta da mais pura velocidade. Maximize o seu desempenho seja trabalhando, jogando, navegando ou assistindo o seu filme preferido, com esse processador você pode tudo!"
  },
  {
    id: "3",
    name:
      "Headset Gamer Razer Electra V2 7.1 Virtual - USB - RZ04-02220100-R3U1",
    price: "329,29",
    description:
      "Este headset Razer é o componente que faltava para garantir sua vitória nos games mais desafiadores. Com som versátil e equilibrado, o headset vai dar aquela vantagem que você precisa para superar os adversários em jogos online no PC, Mac."
  },
  {
    id: "4",
    name:
      "SSD Kingston A400, 240GB, SATA, Leitura 500MB/s, Gravação 350MB/s - SA400S37/240G",
    price: "188,12",
    description:
      "SSD Kingston A400, 240GB, SATA, Leitura 500MB/s, Gravação 350MB/s - SA400S37/240G"
  },
  {
    id: "5",
    name: "Monitor LG LED 25´ Ultrawide, Full HD, IPS, HDMI - 25UM58-P",
    price: "899,90",
    description:
      "Este monitor satisfaz as suas maiores exigências de prazer e entreteniment"
  },
  {
    id: "11",
    name: "Monitor LG LED 25´ Ultrawide, Full HD, IPS, HDMI - 25UM58-P",
    price: "899,90",
    description:
      "Este monitor satisfaz as suas maiores exigências de prazer e entreteniment"
  }
];

app.get("/products", function(req, res) {
  res.send({ data });
});

app.get("/getProduct", function(req, res) {
  let { id } = req.query;
  let item = data.filter(x => x.id === id);
  res.send({ item });
});

app.listen(4000, function() {
  console.log(`Server online em ${new Date().toLocaleString()}`);
});
