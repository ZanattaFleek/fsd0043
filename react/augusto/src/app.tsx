import React, { useEffect, useState } from 'react'

import { Button, TextField } from '@mui/material'
import ClsSQLite from './ClsSQLite'

export default function App({ clsDB }: { clsDB: ClsSQLite }) {

    const [dados, setDados] = useState('')
    const [listagem, setListagem] = useState<any>([])

    const incluir = () => {
        clsDB.incluirTeste().then(rs => {
            setDados(rs.toString())
        })
    }

    const pesquisarClientes = () => {

        clsDB.consultar('clientes', 'nome', dados).then(rs => {
            setListagem(rs)
        })

    }

    return (
        <>
            <Button onClick={() => incluir()}>Incluir Clientes</Button>
            <TextField
                id="outlined-textarea"
                label="Clientes"
                placeholder="Clientes"
                multiline
                value={dados}
                onChange={(oque) => setDados(oque.target.value)}
            />
            <Button onClick={() => pesquisarClientes()}>Pesquisar Clientes</Button>
            {listagem.map((v: any, indice: number) => <div key={indice}>{v.nome}</div>)}
        </>
    )
}