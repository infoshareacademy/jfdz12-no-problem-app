import React, { Component } from 'react'

export default class UserAccount extends Component {
    render() {
        return (
            <div style={{paddingTop: '100px', paddingBottom:'100px'}}>
                <h1>Panel użytkownika</h1>
                
                <p>Dane użytkownika i możliwość ich edycji</p>
                <p>Lista ciast w ofercie użytkownika</p>
                <p>Lista ciast zakupionych przez użytkownika</p>
                <p>Ulubione ciasta użytkownika</p>
                <p>Odsyłacz do formularza "Dodaj ciasto"</p>
               
            </div>
        )
    }
}

