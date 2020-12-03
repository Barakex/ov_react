import React, { useState } from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import HeaderImage from './header.png';


function Introduction() {
    const [img_url] = useState(HeaderImage)

    return (
        <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em',
                    backgroundImage: "url(" + img_url + ")" }}
            vertical
        >
            <Container text>
                <Header
                    as='h1'
                    content='Ovchinnikoff & co'
                    inverted
                    style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
                />
                <Header
                    as='h2'
                    content='Do whatever you want when you want to.'
                    inverted
                    style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                />
                <Button primary size='huge'>
                    Get Started
                    <Icon name='right arrow' />
                </Button>
            </Container>
        </Segment>
    );
}

export default Introduction;