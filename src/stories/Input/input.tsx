import React, { ReactNode } from "react";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Form from 'react-bootstrap/Form';
import './input.scss'

export type InputProps = {
    className?: string;
    style?: any;
    type?: string;
    disabled?: boolean;
    helperText?: ReactNode;
    errorHelperText?: string; // shown when state isError is true
    label?: string;
    isBoxed?: boolean;
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (evt: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyPress?: (evt: React.KeyboardEvent<HTMLInputElement>) => void;
    title?: string;
    errorTitle?: string;
    placeholder?: string;
    name: string;
    id?: string;
    value?: any;
    defaultValue?: any;
    size?: number;
    min?: number;
    max?: number;
    step?: any;
    spellCheck?: boolean; // specifies whether the element is to have its spelling and grammar checked or not
    pattern?: string; //specifies a regular expression that element's value is checked against
    required?: boolean; // auto-check on blur if there's a value
    error?: boolean; // force error state of component
    dataqa?: string; //quality engineering testing field
    debounce?: boolean; // apply debounce behaviour or not
    debounceTime?: number; // debounceTime/Delay value in miliseconds
}

export default class Input extends React.PureComponent<InputProps> {
    private renderHelperText = (helperText: ReactNode, isError?:boolean) => {
        return(
            <Form.Text className={isError?"text-muted danger-text":"text-muted"}>
                {helperText}
            </Form.Text>
        )
    }
    private buildInput = () => {
        const {className, error, onChange, errorHelperText, helperText} = this.props;
        return (
            <Form>
                <FormGroup className="input-formgroup">
                    <Form.Label>{this.props.label}</Form.Label>
                    <div className="input-container" style={{backgroundColor: ''}}>
                        <Form.Control
                            className={error?`danger-input ${className}`: className}
                            placeholder={this.props.placeholder} 
                            onChange={
                                (event:React.ChangeEvent<HTMLInputElement>) => {
                                    if(onChange){
                                        onChange(event)
                                    }
                                }
                            }
                        ></Form.Control>
                        {error?this.renderHelperText(errorHelperText, error):this.renderHelperText(helperText)}
                    </div>
                </FormGroup>
            </Form>
        )
    }
    render() {
        return (
            <div>
                {this.buildInput()}
            </div>
        )
    }
}