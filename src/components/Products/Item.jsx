import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AddButton from "../Buttons/AddButton";
import styled from "styled-components";

class Item extends React.Component {

  render() {
    return (
      <Div>
        <Link to={`/produto/${this.props.product.id}`}>
          <H2Link>
            {this.props.product.name}
          </H2Link>
        </Link>
        <DivAux>
          <h3>Código: {this.props.product.id}</h3>
          <h4>R$ {this.props.product.price}</h4>
          <section>
            Descrição: {this.props.product.description.substr(0, 50)}...
        </section>
          <DivCenter>
            <AddButton product={this.props.product}>Adicionar ao carrinho</AddButton>
          </DivCenter>
        </DivAux>

      </Div>
    );
  }
}

export default Item;

const H2Link = styled.h2`
  background-color: #fe7c02;
  color: white;
  font-size: 1.2rem;
  margin-top: 0px;
  padding: 10px;
`
const Div = styled.div`
  background-color: #fefefe;
  border: 1px solid black;
  border-radius: 2px;
  margin: 10px;
`
const DivAux = styled.div`
  color: #222222;
  padding: 0px 10px 10px 10px; 
`
const DivCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
` 