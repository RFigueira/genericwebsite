import React from 'react';
import { Link } from 'react-router-dom';


const Header = props => {
    return (
        <div className='list-group'>
            <a href='#' className='list-group-item list-group-item-action active'>Selecione uma opção</a>
            <Link to='/gerenciador/portfolio' className='list-group-item list-group-item-action' >Portfolio</Link>
            <Link to='/gerenciador/preco' className='list-group-item list-group-item-action' >Preço</Link>
        </div>
    )
}

export default Header;