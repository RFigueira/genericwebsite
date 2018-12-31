import React, { Component } from 'react';

import config, { storage } from '../../../firebase-config';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
    }

    save(event) {
        event.preventDefault();
        console.log(this.titulo.value);
        console.log(this.descricao.value);

        const arquivo = this.imagem.files[0];
        const { name, size, type } = arquivo;

        const ref = storage.ref(name);
        ref.put(arquivo).then(img => {
            img.ref.getDownloadURL()
                .then(url => {
                    console.log(url);
                    const objPortfolio = {
                        titulo: this.titulo.value,
                        descricao: this.descricao.value,
                        imagem: url
                    }
                    config.push('portfolio', {data: objPortfolio});
                })
        });


    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Pagina de portfolios</h1>
                    <form onSubmit={this.save}>
                        <div className="form-group">
                            <label htmlFor="titulo">Titulo</label>
                            <input type="titulo" className="form-control"
                                id="titulo" placeholder="Titulo" ref={(ref) => this.titulo = ref} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao">Descrição</label>
                            <textarea type="text" className="form-control"
                                id="descricao" placeholder="Descrição" rows="3" ref={(ref) => this.descricao = ref} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imagem">Imagem</label>
                            <input type="file" className="form-control-file"
                                id="imagem" ref={(ref) => this.imagem = ref} />
                        </div>
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </form>
                </div>
            </div>
        )
    }
}