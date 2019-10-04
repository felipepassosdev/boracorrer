import React, { Component } from 'react'

class Conteudo extends Component {
    constructor(props) {
        super(props)

        this.state = ({
            Data: [],
            title : '',
            description : '',
            nomeuser: ''
        })
    }

    updateQuestions() {
        fetch('http://localhost:3001/Helps')
            .then(response => response.json())
            .then(response => {
                response.map((data) => {
                    this.setState({
                        Data: [
                            ...this.state.Data, {
                                description: data.description,
                                title: data.title
                            }
                        ]
                    })
                })
            })
    }

    handleChangeTitle = event => {
        this.setState({ 
            title : event.target.value,
        });
    }

    handleChangeDescription = event => {
        this.setState({ 
            description: event.target.value, 
        });
    }

    componentDidMount() {
        this.updateQuestions()
    }

    handleSubmit = event => {
        event.preventDefault();

        const data = {
            title: this.state.title,
            description: this.state.description,
            nameuser: 'Matheus',
            iduser: '5d7e886e7976474edca34888'
        };

        fetch('http://localhost:3001/Help', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(res => console.log(res));
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Dê um título da pergunta</h4>
                            <div className="input-group">
                                <input type="text" className="form-control" aria-label="" name="title" onChange={this.handleChangeTitle} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <h4 className="card-title">Faça a pergunta </h4>
                            <div className="input-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="description" onChange={this.handleChangeDescription}></textarea>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <p className="card-text">Escolha a #tag da pergunta</p>
                            <select className="form-control-lg">
                                <option className="text-primary">#React JS</option>
                                <option className="text-success">#Node JS</option>
                                <option className="text-info">#React Native</option>
                                <option className="text-danger">#Angular</option>
                                <option>Outro</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <button className="btn btn-primary" type="submit">Enviar</button>
                        </div>
                    </div>
                </form>


                <div className="row">
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <p><strong className="text-primary">#React</strong></p>
                                <h5>Nome</h5>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Como fazer navegação no react? </h4>
                                <p className="card-text">Voce pode usar o...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <p><strong className="text-success">#NodeJS</strong></p>
                                <h5>Nome</h5>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Como fazer navegação no react? </h4>
                                <p className="card-text">Voce pode usar o...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <p><strong className="text-info">#React Native</strong></p>
                                <h5>Nome</h5>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Como fazer navegação no react? </h4>
                                <p className="card-text">Voce pode usar o...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <p><strong className="text-danger">#Angular</strong></p>
                                <h5>Nome</h5>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Como fazer navegação no react? </h4>
                                <p className="card-text">Voce pode usar o...</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <p><strong className="text-primary">#React</strong></p>
                                <h5>Nome</h5>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Como fazer navegação no react? </h4>
                                <p className="card-text">Voce pode usar o...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <p><strong className="text-success">#NodeJS</strong></p>
                                <h5>Nome</h5>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Como fazer navegação no react? </h4>
                                <p className="card-text">Voce pode usar o...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <p><strong className="text-info">#React Native</strong></p>
                                <h5>Nome</h5>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Como fazer navegação no react? </h4>
                                <p className="card-text">Voce pode usar o...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <p><strong className="text-danger">#Angular</strong></p>
                                <h5>Nome</h5>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Como fazer navegação no react? </h4>
                                <p className="card-text">Voce pode usar o...</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

export default Conteudo;