import React, { Component } from 'react';

class Products extends Component {
    state =
    {
      name: '',
      price: '',
      catagory: '',
      code: '',
      barcode: '',
      description: '',
      quantity: '',
      editId: ''
    }
    handleEdit = (item) =>{
        const { id, ...product} = item;
        this.setState({
            ...product,
            editId: id
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e, index) => {
        e.preventDefault();
        const {editId: id, ...state} = this.state;
        state['id'] = id;
        this.props.updateProduct(state, index);
        this.setState({
            name: '',
            price: '',
            catagory: '',
            code: '',
            barcode: '',
            description: '',
            quantity: '',
            editId: ''
        })
    }
    handleCancle = (e) => {
        this.setState({
            name: '',
            price: '',
            catagory: '',
            code: '',
            barcode: '',
            description: '',
            quantity: '',
            editId: ''
        })
    }
    render() {
        const { products, deleteProduct } = this.props; 
        const productTable = (
            <div className="product">
                <div className="card mt-5 mb-5">
                    <div className="card-header">
                         Lista de produtos
                        </div>
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th className="border-top-0" scope="col">
                                            Descrição
                                        </th>
                                        <th className="border-top-0">
                                            Valor
                                        </th>
                                        <th className="border-top-0">
                                            Embalagem
                                        </th>
                                        <th className="border-top-0">
                                            Código de Barra
                                        </th>
                                        <th className="border-top-0">
                                            Código
                                        </th>
                                        <th className="border-top-0">
                                            Observação
                                        </th>
                                        <th className="border-top-0">
                                            Quantidade
                                        </th>
                                        <th className="border-top-0">
                                            Ações
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.length ? (

                                            products.map((product, index) => {
                                                const { id, name, price, catagory, barcode, code, quantity ,description } = product; 
                                                return (
                                                    this.state.editId === id?
                                                        (
                                                            <tr key={index}>
                                                                <td><input type="number" className="pl-2" id="price" value={this.state.price} onChange={this.handleChange} /></td>
                                                                <td><input type="text" className="pl-2" id="quantity" value={this.state.quantity} onChange={this.handleChange} /></td>
                                                                <td>
                                                                    <button type="submit" className="btn btn-sm mr-2" onClick={(e) => this.handleSubmit(e, index)}>
                                                                        <i className="fa fa-check"></i>
                                                                    </button>
                                                                    <button className="btn btn-sm mr-2" onClick={(e) => this.handleCancle(e)}>
                                                                        <i className="fa fa-ban"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ) : (
                                                            <tr key={index}>
                                                                <td>
                                                                    {name}
                                                                </td>
                                                                <td>
                                                                   R$ {price}
                                                                </td>
                                                                <td>
                                                                    {catagory}
                                                                </td>
                                                                <td>
                                                                    {code}
                                                                </td>
                                                                <td>
                                                                    {barcode}
                                                                </td>
                                                                <td>
                                                                    {description}
                                                                </td>
                                                                <td>
                                                                    {quantity}
                                                                </td>
                                                                
                                                                <td>
                                                                    <button className="btn btn-sm mr-2" onClick={() => { this.handleEdit(product) }}>
                                                                        <i className="fa fa-pencil"></i>
                                                                    </button>

                                                                    <button className="btn btn-sm mr-2" onClick={() => { deleteProduct(id) }}>
                                                                        <i className="fa fa-trash"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )


                                                )
                                            })
                                        ) : (
                                            <tr>
                                                <td colspan="4" className="text-danger"> Lista de produtos esta vazia! </td>
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <div className="product-list">
                {productTable}
            </div>
        );
    }
}

export default Products;