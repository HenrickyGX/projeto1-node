"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
//visivel no navegador é o metodo GET
app.get('/hora', function (req, res) {
    res.json({ horaAtual: 'agora são 19h47' });
});
//POST
app.post('/soma', (request, response) => {
    //const {val1,val2} = request.params
    //const {q1,q2} = request.query
    const { v1, v2 } = request.body;
    console.log(v1, v2);
    const somatorio = v1 + v2;
    response.json({ resultado: somatorio });
});
//PUT
app.put('');
app.delete('');
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
