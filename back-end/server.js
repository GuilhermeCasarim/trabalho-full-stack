const express = require('express')
const rotas = require('./routes')
const app = express()

app.use(express.json())

app.use('/api', rotas)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))

// const axios = require('axios')
// const port = 3000

// app.get('/', (req, res) => {
//     res.send('Testando rotaaa')
// })

// app.get('/chavinho', (req, res) => {
//     res.send('ai chavinho')
// })

// app.listen(port, () => {
//     console.log(`Servidor rodando em http://localhost:${port}`)
// })