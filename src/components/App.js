import Navbar from './navbar';
import Column from './column';
import './css/style.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../redux/reducers/reducer.js';


const store = createStore(reducer);

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    columnId:1,
                    title: "ÖDEV",
                    cards: [
                        {
                            topicName: "Ödev A",
                            description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
                        },
                        {
                            topicName: "Ödev B",
                            description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
                        },
                        {
                            topicName: "Ödev c",
                            description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir",
                        }
                    ]
                },
                {
                    columnId:2,
                    title: "SINAV",
                    cards: [
                        {
                            topicName: "Sınav A",
                            description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının",
                        },
                        {
                            topicName: "Sınav B",
                            description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının",
                        },
                        {
                            topicName: "Sınav C",
                            description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir",
                        }

                    ]
                },
                {
                    columnId:3,
                    title: "PROJE",
                    cards: [
                        {
                            topicName: "Proje A",
                            description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
                        },
                        {
                            topicName: "Proje B",
                            description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
                        },
                        {
                            topicName: "Proje C",
                            description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir",
                        }
                    ]
                }

            ]
        }

    }
    render() {
        return (
            <Provider  store={store}>
                <div className="App">
                    <Navbar
                    />
                    <Column
                        columns={this.state.columns}
                    />
                </div>
            </Provider>

        )
    }
}
