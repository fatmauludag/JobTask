import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';


export default class task2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Sayı1: "",
            Sayı2: "",
            Sayı3: "",
            Output: null
        };
    }

    onSayıChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        if (this.state.Sayı1 === ""
            || this.state.Sayı2 === ""
            || this.state.Sayı3 === "") {
            this.setState({ Output: "Lütfen tüm alanları giriniz !" })
            return;
        }

        if (this.state.Sayı3 === "0") {
            this.setState({ Output: "0'a bölünemez !" })
            return;
        }

        try {
            var value1 = parseInt(this.state.Sayı1);
            var value2 = parseInt(this.state.Sayı2);
            var value3 = parseInt(this.state.Sayı3);

            var minValue = Math.min(value1, value2);
            var maxValue = Math.max(value1, value2);

            var sum = 0;
            for (var i = minValue; i < maxValue; i++) {
                if (i % value3 == 0)
                    sum += i;
            }

            this.setState({ Output: "Toplam : " + sum });
        } catch (error) {
            this.setState({ Output: error });
        }
    }

    render() {
        return (<div style={{ padding: '20px 15px', border: '.2rem solid #ececec', borderRadius: 8 }}>

            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                    {'Sayı 1'}
                </Form.Label>
                <Col sm={5}>
                    <Form.Control type="number"
                        placeholder="İlk sayıyı giriniz !" name="Sayı1"
                        value={this.state.Sayı1}
                        onChange={this.onSayıChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    {'Sayı 2'}
                </Form.Label>
                <Col sm={5}>
                    <Form.Control type="number"
                        placeholder="İkinci sayıyı giriniz !" name="Sayı2"
                        value={this.state.Sayı2}
                        onChange={this.onSayıChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    {'Sayı 3'}
                </Form.Label>
                <Col sm={5}>
                    <Form.Control type="number"
                        placeholder="Üçüncü sayıyı giriniz !" name="Sayı3"
                        value={this.state.Sayı3}
                        onChange={this.onSayıChange} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button variant="outline-primary" type="submit" href="#" onClick={this.onSubmit}>
                        {'Hesapla'}
                    </Button>
                </Col>
            </Form.Group>
            {this.state.Output != null ?
                <pre>
                    <br />
                    <br />
                    {this.state.Output}
                </pre>
                : null}
        </div>)
    }
}