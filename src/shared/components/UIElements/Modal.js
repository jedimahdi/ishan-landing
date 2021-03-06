import React from 'react'
import ReactDOM from 'react-dom'
import {CSSTransition} from 'react-transition-group'

import Backdrop from './Backdrop'
import './Modal.css'

const ModalOverlay = props => {
  const content = (
    <div className={`dialogue ${props.className}`} style={props.style}>
      <div style={{backgroundColor: '#111'}}>
        <header className={`dialogue__header ${props.headerClass}`}>
          <h2>{props.header}</h2>
        </header>
        <form
          onSubmit={
            props.onSubmit ? props.onSubmit : event => event.preventDefault()
          }
        >
          <div className={`dialogue__content ${props.contentClass}`}>
            {props.children}
          </div>
          <footer className={`dialogue__footer ${props.footerClass}`}>
            {props.footer}
          </footer>
        </form>
      </div>
    </div>
  )
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}

const Modal = props => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="dialogue"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  )
}

export default Modal
