import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";

import Logo from "../../assets/IndicaAi-logo.svg";

import { Container, Form} from "./styles";
import { Formulario } from "./styleFormulario";
class cadastroCliente extends Component{
    state ={
      nameClient:"",
	    CPF:"",
	    emailClient:"",
	    numberPhone:"",
	    idJiva:"",
	    car:"",
	    board:""
    };

    handleAddCliente = async e => {
        e.preventDefault();
        const { nameClient, CPF, emailClient, idJiva, numberPhone, car, board  } = this.state;
        if (!nameClient || !CPF || !emailClient || !idJiva || !numberPhone || !car || !board){
            return(alert("Preencha todas as informações do cliente"));
        }else{
            try {
              const response = await api.get("/create/cadastroCliente",{nameClient, CPF, emailClient, idJiva, numberPhone, car, board});
              return(alert("Cliente cadastrado"));
            }catch (err) {
              return(alert("Cliente já cadastrado"));
            }
        }
    };
    
    handleCadastroCliente = async e => {
        e.preventDefault();
        this.props.history.push("/cadastroCliente");
      };
      handleCadastroAfiliado = async e => {
        e.preventDefault();
        this.props.history.push("/cadastroAfiliado");
      };
      handleConsultaCliente = async e => {
        e.preventDefault();
        this.props.history.push("/consultaCliente");
      };
      handleConsultaAfiliado = async e => {
        e.preventDefault();
        this.props.history.push("/consultaAfiliado");
      };
    render() {
        return (
        <Container>
        <Form>
          <img src={Logo} alt="IndicaAi Logo" ahref="/home"/>
          <button type="submit" onClick={this.handleCadastroCliente}>Cadastro Cliente</button>
          <button type="submit" onClick={this.handleCadastroAfiliado}>Cadastro Afiliado</button>
          <button type="submit" onClick={this.handleConsultaAfiliado}>Consulta Afiliado</button>
          <button type="submit" onClick={this.handleConsultaCliente}>Consulta Cliente</button>
        
          <Link to="/">Sair</Link>
        </Form>
        <Formulario onSubmit={this.handleAddCliente}>
          <input
            type="text"
            placeholder="Nome"
            onChange={e => this.setState({ nameClient: e.target.value })}
          />
          <input
            type="email"
            placeholder="E-Mail"
            onChange={e => this.setState({ emailClient: e.target.value })}
          />
          <input
            type="number"
            placeholder="CPF"
            onChange={e => this.setState({ CPF: e.target.value })}
          />
          <input
          type="number"
          placeholder="JIVA"
          onChange={e => this.setState({ idJiva: e.target.value })}
          />
          <input
            type="number"
            placeholder="Numero telefone"
            onChange={e => this.setState({ numberPhone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Automovel"
            onChange={e => this.setState({ car: e.target.value })}
          />
          <input
            type="text"
            placeholder="Placa do automovel"
            onChange={e => this.setState({ board: e.target.value })}
          />
          <hr />
          <button type="submit">Salvar</button>
        </Formulario>
      </Container>
        )
    }
}

export default withRouter(cadastroCliente);