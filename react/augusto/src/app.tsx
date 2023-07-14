import React, { useEffect, useState } from 'react'

import { Button, TextField } from '@mui/material'
import ClsSQLite from './ClsSQLite'

export default function App({ clsDB }: { clsDB: ClsSQLite }) {

    const [dados, setDados] = useState('{"nome": "Zanatta", "telefone": "Augusto"}')
    const [listagem, setListagem] = useState([])

    const listarClientes = () => {
        clsDB.consultar('clientes').then(rs => {
            setListagem(rs)
        })
    }

    const incluirClientes = () => {
        clsDB.incluir('clientes', dados).then(() => {
            listarClientes()
        })
    }

    return (
        <>
            <TextField
                id="outlined-textarea"
                label="Clientes"
                placeholder="Clientes"
                multiline
                value={dados}
                onChange={(oque) => setDados(oque.target.value)}
            />
            <Button onClick={() => incluirClientes()}>Incluir Clientes</Button>
            {listagem.map((v: any, indice: number) => <div key={indice}>{v.nome}</div>)}
        </>
    )
}