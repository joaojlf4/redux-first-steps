import React from 'react';

import { Container, ProductTable, Total } from './styles';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://http2.mlstatic.com/tenis-nike-air-jordan-1-travis-scott-D_NQ_NP_884573-MLB31417636778_072019-F.jpg" alt="Tênis"/>
            </td>
            <td>
              <strong>Tênis muito legal</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button>
                  <MdRemoveCircleOutline size={20} color="#7159c1"/>
                </button>
                <input type="number" readOnly value={1}/>
                <button>
                  <MdAddCircleOutline size={20} color="#7159c1"/>
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button>
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">
          Finalizar pedido
        </button>
        <Total>
          <span>TOTAL</span>
          <strong>R$ 1920,00</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
