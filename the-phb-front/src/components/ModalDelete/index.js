/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.css"
import api from "../../services/api";

export default (contact) => {
    return (
        <div>
            Deseja apagar o contato {contact.name_contact}
            <button type="button" onClick={() => {
                api
                    .delete(`/${contact.id_contact}`)
                    .then((response) => console.log('Contato deletado com sucesso'))
                    .catch((err) => {
                        console.error("ops! ocorreu um erro" + err);
                    });
            }}>
            sim
            </button>
            <button type="button">nao</button>
        </div>
    )
}