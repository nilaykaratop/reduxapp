import React from 'react';
import {connect } from 'react-redux';
import { addCard} from '../redux/actions/action.js';

 class Navbar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            text:'',
        };
    }
    
    addCard(){
        this.props.addCard(this.state.text);
    }

    state = { showColumnForm: false }
    showColumnForm = () => {
        return (
            <div className="form">
                <form className="" >
                    <div>{this.state.columnTitle}</div>
                    <input id="add-column-input" type="text"  placeholder="Column Başlığı Giriniz" />
                    <button className="add-column-btn" type="submit" >{'Column Ekle'}</button>
                    <button onClick={() => this.setState({ showColumnForm: false })} type="submit">{'Kapat'}</button>
                </form>
            </div>
        );
    }
    state = { showCardForm: false }
    showCardForm = () => {
        return (
            <div className="form">
                <form className="i" >
                    <input onChange={event=>this.setState({text: event.target.value})} id="add-card-topic-input" type="text" className="" placeholder="Card Başlığı Giriniz" />
                    <input id="add-card-desc-input" type="text" className="" placeholder="Açıklama Giriniz" />
                    <button id="add-card-btn" type="submit" onClick={()=> this.addCard()}>{'Card Oluştur'}</button>
                    <button onClick={() => this.setState({ showCardForm: false })} type="submit">{'Kapat'}</button>
                </form>
            </div>
        );
    }

    render() {
console.log(this.props);
        return (
            <div className='navbar'>

                <div className="add-column">
                    <button onClick={() => this.setState({ showColumnForm: true })}>Yeni Column</button>
                    {this.state.showColumnForm ? this.showColumnForm() : null}
                </div>
                <h3>BoardApp</h3>
                <div className="add-card">
                    <button onClick={() => this.setState({ showCardForm: true })} >Yeni Card</button>
                    {this.state.showCardForm ? this.showCardForm() : null}
                </div>
                
            </div>
        )

    }
}
export default connect(null,{addCard})(Navbar);