import React from "react";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Form from 'react-bootstrap/Form';
import './input.scss'

type InputProps = {
    label: string;
    placeholder: string;
    helperText: string;
}

export default class Input extends React.Component<InputProps> {
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Form.Label>{this.props.label}</Form.Label>
                        <div className="input-container">
                            <Form.Control placeholder={this.props.placeholder}></Form.Control>
                            <Form.Text className="text-muted" onChange={() => console.log()}>
                                {this.props.helperText}
                            </Form.Text>
                        </div>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}