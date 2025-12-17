import express from 'express'
const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) => {
    users.push(req.body)
    res.status(201).json(req.body)
})

app.get('/usuarios', (req, res) => {
	res.status(200).json(users)
})

app.listen(3000)


/*
    1) Tipo de Rota / Método HTTP
        GET: Buscar uma informação no back-end
        POST: Criar uma informação no back-end
        PUT: Atualizar uma informação no back-end
        DELETE: Deletar uma informação no back-end
        PATCH: Atualizar uma informação específica no back-end

    2) Endereço (URL)
        /usuarios
        /usuarios/:id
    
*/