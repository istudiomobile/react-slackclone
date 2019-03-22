import React, { Component } from 'react';
import { Menu, Icon, Modal, Form, Input } from 'semantic-ui-react';



class Channels extends Component {

    state = {
        channels: [],
        modal: false
    }

    closeModal = () => this.setState({ modal: false });

    render() {
        const { channels, modal } = this.state;
        return (
            <Menu.Menu style={{ paddingBottom: '2em' }}>
                <Menu.Item>
                    <span>
                        <Icon name="exchange" /> CHANNELS
                    </span>
                    ({ channels.length }) <Icon name="add" />
                </Menu.Item>
                { /* Channels */ }
            </Menu.Menu>

            // Add Channel Modal
            <Modal basic open={modal} onClose={this.closeModal}>
                <Modal.Header>Add a Channel</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <Input fluid label="Name of Channel" name="channelName" onChange={this.handleChange} />
                        </Form.Field>
                    </Form>
                </Modal.Content>
            </Modal>
         );
    }
}

export default Channels;