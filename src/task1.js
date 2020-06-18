import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { GetNonAdjacentSubsets } from "./task1Helper";

export default class task1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Sayı1: "",
            Output: null
        };
    }

    onSayıChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = () => {
        if (this.state.Sayı1 === "") {
            this.setState({ Output: "Lütfen boş bırakmayınız !" })
            return;
        }

        try {
            var output = "";
            var values = this.state.Sayı1
                .split(",")
                .filter(x => x != null && x != "")
                .map(x => parseInt(x.trim()));

            var subsets = Array.from(GetNonAdjacentSubsets(...values));
            var maxSum = Number.NEGATIVE_INFINITY;

            output += "AltKüme\t\t\tToplam\n";
            for (const subset of subsets) {
                var sum = subset.reduce((a, b) => a + b, 0);
                output += `[${subset}]\t\t\t${sum}\n`;
                if (sum > maxSum) maxSum = sum;
            }

            output += '\nEn büyük toplam ' + maxSum + ' olur.';

            this.setState({ Output: output });
        } catch (error) {
            this.setState({ Output: error });
        }
    }

    render() {
        return (<div style={{ padding: '20px 15px', border: '.2rem solid #ececec', borderRadius: 8 }}>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    {'Sayılar'}
                </Form.Label>
                <Col sm={5}>
                    <Form.Control type="text"
                        placeholder="Sayıları giriniz ( Virgül ile ayırınız)" name="Sayı1"
                        value={this.state.Sayı1}
                        onChange={this.onSayıChange} />
                </Col>



                <Button  variant="outline-primary" type="submit" href="#" onClick={this.onSubmit}>
                    {'Bul'}
                </Button>

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
