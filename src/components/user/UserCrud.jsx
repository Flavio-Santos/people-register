import React, { Component } from 'react';
import Main from '../template/Main/Main'

const headerProps = {
        icon: 'users',
        title: 'Usuários',
        subTitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...props}>
                Cadastro de usuarios
            </Main>
        )
    }
}