/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.css"
import { useEffect, useState } from "react";
import maisInfo from "../../images/info.png"
import deleteContact from "../../images/remover.png"
import api from "../../services/api";

export default () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        api
          .get("")
          .then((response) => setContacts(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    }, [contacts]);

    function delContact(id) {
        api
            .delete(`/${id}`)
            .then((response) => console.log('Contato deletado com sucesso'))
            .catch((err) => {
                        console.error("ops! ocorreu um erro" + err);
        });
    }

    function transformPhone(stringNumber) {
        let numberTel = ''

        if (stringNumber.length === 11)

            [...stringNumber].forEach((e, index) => {

                switch (index) {
                    case 0:{
                        numberTel += '(' + e;
                        break;
                    }
                    
                    case 1: {
                        numberTel += e + ') '
                        break;
                    }

                    case 7: {
                        numberTel += '-' + e
                        break;
                    }

                
                    default: {
                        numberTel += e
                        break;
                    }
                }
            })

            return numberTel;

        }

        return(
            <ul>
                {contacts.map((contact) => {
                    return(
                        <li key={contact.id_contact}>
                            <span>Nome: {contact.name_contact}</span>
                            <span>Cel: {transformPhone(contact.cell_phone)}</span>
                            <img src={maisInfo} alt="mais info" onClick={() => {

                            }}/>
                            <img src={deleteContact} alt="delete contact" onClick={() => delContact(contact.id_contact)}/>
                        </li>
                        )
                    })
                }
            </ul>
       ) 
}

   