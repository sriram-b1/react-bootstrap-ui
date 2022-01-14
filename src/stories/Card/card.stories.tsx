import React from 'react';
import { storiesOf } from "@storybook/react";
import '../../wrapper-styles/index.scss'
import './card.scss'
import { Card } from 'react-bootstrap';

storiesOf("POC2/Card", module)
    .add("Normal Card", () => (
        <Card>
            <Card.Header>Card Title</Card.Header>
            <Card.Body>
                <Card.Title>Block Title</Card.Title>
                <Card.Text>Exercitation eu ipsum consequat in consectetur. Reprehenderit deserunt exercitation aliqua elit exercitation consequat cillum minim culpa dolore. Aliqua veniam consectetur dolor proident proident ut dolor occaecat amet eu aute. Ipsum consequat Lorem consequat laboris ut dolore ullamco. Enim sunt excepteur exercitation eu sunt anim sint.</Card.Text>
            </Card.Body>
        </Card>
    ))
    .add("Icon in Header", () => (
        <Card>
            <Card.Header>
                <div className='icon'>
                    <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" alt="Tick" />
                </div>
                Card with Icon in Title
            </Card.Header>
            <Card.Body>
                <Card.Title>Icon list</Card.Title>
                <Card.Text>
                    <div className='icon-list'>
                        <div className='icon'>
                            <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" alt="Tick" />
                        </div>
                        Item 1
                    </div>
                </Card.Text>
                <Card.Text>
                    <div className='icon-list'>
                        <div className='icon'>
                            <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" alt="Tick" />
                        </div>
                        Item 2
                    </div>
                </Card.Text>
                <Card.Text>
                    <div className='icon-list'>
                        <div className='icon'>
                            <img src="https://www.freeiconspng.com/thumbs/cross-png/red-cross-png-33.png" alt="Cross" />
                        </div>
                        Item 3
                    </div>
                </Card.Text>


            </Card.Body>
        </Card>
    ))