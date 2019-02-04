import React, { Component } from 'react';
import './IngresaTuCodigo.css';
import krisClaro from '../../assets/kris-claro.png';
import tituloIngresaTuCodigo from '../../assets/titulo-ingresa-tu-codigo.png';
import bgButton from '../../assets/bg-button.png';



class IngresaTuCodigo extends Component {
    render() {
        return (
            <div className="ingresaTuCodigo">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="flex-box">
                                <form>
                                    <div className="title">
                                        <figure>
                                            <img src={krisClaro} alt="kris-claro"/>
                                            <img src={tituloIngresaTuCodigo} alt="kris-claro"/>                                            
                                        </figure>
                                    </div>
                                    <div className="input">
                                        <input type="text"/>
                                    </div>
                                    <div className="button">
                                        <button id="send-code" className="send-code" type="submit">siguiente</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IngresaTuCodigo;