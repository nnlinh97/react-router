import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOk: false
        }
    }
    
    render() {
        let {isOk} = this.state;
        return (
            <div>
                Contact page <br/>
                <button onClick={() => this.checkFunction(false)} type="button" className="btn btn-info">Cho phép</button>
                <button onClick={() => this.checkFunction(true)} type="button" className="btn btn-danger">Khong Cho phép</button>
                {/* Prompt vd: người dùng đã nhập data vào form nhưng bấm sang trang khác thì sẽ hỏi chắc chắn có muốn thoát hay không */}
                <Prompt 
                // when: true -> hỏi, false -> không hỏi ||| true/false vd đã nhập vào form thì true, chưa nhập thì false
                    when={isOk}
                    message={location => (`Bạn có chắn chắn đi đến trang ${location.pathname}`)}
                    // message là tin nhắn cần hỏi khi when = true, location là vị trí cần đi đến nếu nhân YES
                />
            </div>
        );
    }
    checkFunction = (check) => {
        this.setState({
            isOk: check
        });
    }
}

export default Contact;