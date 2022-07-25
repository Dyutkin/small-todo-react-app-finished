import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
    }

    toggleOpenModal = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        const {isOpen} = this.state;
        return (
            <>
                <button onClick={this.toggleOpenModal}>Open modal</button>
                {isOpen && (
                    <div className='modal'>
                        <div className='modal-body'>
                            <h1>Modal title</h1>
                            <p>Modal text infomation</p>
                            <button onClick={this.toggleOpenModal}>Close modal</button>
                        </div>
                    </div>
                )}
            </>
        )
    }
}

