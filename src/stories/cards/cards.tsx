import React from "react";
import { Card } from "react-bootstrap";
import '../wrapper-styles/index.scss'

type CardProps = {
    header?: string;
    container: any;
    actions?: any;
}

export default class Cards extends React.PureComponent<CardProps> {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Header>{this.props.header}</Card.Header>
                    <div className="card-container">
                        {this.props.container}
                    </div>
                    <div className="card-footer">
                    {this.props.actions && this.props.actions.map((action: any) => (
                        <Card.Link href={action.link && action.link} onClick={action.onClick}>{action.text}</Card.Link>
                    ))}
                    </div>
                </Card.Body>
            </Card>
        )
    }
}