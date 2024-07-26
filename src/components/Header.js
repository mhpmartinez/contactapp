import React from 'react'

const Header = ({ toggleModal, nbOfContacts }) => {
  return (
    <header className='header'>
        <div className='container'>
            <h3>Lista de Contatos ({nbOfContacts})</h3>
            <button onClick={() => toggleModal(true)} className='btn'>
                <i className='bi bi-plus-square'></i> Novo Contato
            </button>
        </div>
    </header>
  )
}

export default Header