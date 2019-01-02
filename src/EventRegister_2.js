import React, { Component } from "react";

import {
  Form,
  Grid,
  Button,
  Card,
  Image,
  Segment,
  Label,
  Input,
  TextArea
} from "semantic-ui-react";

class EventRegister extends Component {
  state = {
    value: ["", "", ""],
    // name, venue, agenda
    submitButonDisbaleBool: true
  };

  setStateValue = (index, e) => {
    if (e.target.value.trim().length) {
      this.setState(
        {
          value: { ...this.state.value, [index]: e.target.value }
        },
        () => {
          const { value } = this.state;
          console.log(value[0], value[1], value[2]);
          if (value[0].trim()[0] && value[1].trim()[0] && value[2].trim()[0]) {
            this.setState({
              submitButonDisbaleBool: false
            });
          } else {
            this.setState({
              submitButonDisbaleBool: true
            });
          }
        }
      );
    } else {
      this.setState({
        submitButonDisbaleBool: true
      });
    }
  };
  FormRender = () => {
    const FormGroupDetails = [
      {
        label: "Event's Name",
        placeholder: "XDZ Meetup"
      },
      {
        label: "Event's Venue",
        placeholder: "Lets CoWork, CP"
      }
    ];

    const styleEventRegister = {
      margin: "2.5% 0",
      borderRadius: "10px",
      padding: "8.35mm",
      boxShadow: "2px 5px 20px #ccc"
    };
    const header = {
      marginBottom: "8.25mm",
      color: "white",
      backgroundColor: "blueviolet"
    };
    return (
      <div style={{ margin: "6.25mm", backgroundColor: "#F9F7F8" }}>
        <Card raised fluid style={styleEventRegister}>
          <Grid stackable relaxed columns={2}>
            <Grid.Column width={6}>
              <Image src="https://cdn.dribbble.com/users/33385/screenshots/5420361/screen_shot_2018-10-18_at_11.46.41_pm.png" />
            </Grid.Column>
            <Grid.Column width={10}>
              <Card.Content>
                <Card.Header>
                  <Button style={header}>Register the event</Button>
                </Card.Header>
                <Card.Description>
                  <Segment basic>
                    <Form error>
                      <Grid.Column width={6} />
                      <Grid stackable columns={2}>
                        <Grid.Row>
                          {FormGroupDetails.map((res, index) => {
                            // console.log(res, index);
                            return (
                              <Grid.Column key={index}>
                                <Form.Group widths="equal">
                                  <Form.Field>
                                    <Label
                                      pointing="below"
                                      circular
                                      color="teal"
                                      basic
                                    >
                                      {res.label}
                                    </Label>
                                    <Input
                                      focus
                                      required
                                      placeholder={res.placeholder}
                                      onChange={e =>
                                        this.setStateValue(index, e)
                                      }
                                    />
                                  </Form.Field>
                                </Form.Group>
                              </Grid.Column>
                            );
                          })}
                        </Grid.Row>
                      </Grid>
                      <Grid stackable column={1}>
                        <Grid.Row>
                          <Grid.Column>
                            <Form.Group widths="equal">
                              <Form.Field>
                                <Label
                                  pointing="below"
                                  circular
                                  color="teal"
                                  basic
                                >
                                  Event's Description / Agenda
                                </Label>
                                <TextArea
                                  required
                                  label=""
                                  placeholder="Description / Agenda"
                                  onChange={e =>
                                    this.setStateValue(
                                      FormGroupDetails.length,
                                      e
                                    )
                                  }
                                />
                              </Form.Field>
                            </Form.Group>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column style={{ textAlign: "center" }}>
                            <Form.Field
                              id="form-button-control-public"
                              control={Button}
                              content="Confirm"
                              color="teal"
                              circular
                              disabled={this.state.submitButonDisbaleBool}
                              onClick={this.submitEventData}
                            />
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Form>
                  </Segment>
                </Card.Description>
              </Card.Content>
            </Grid.Column>
          </Grid>
        </Card>
      </div>
    );
  };

  render() {
    const FormRender = this.FormRender();
    return <div>{FormRender}</div>;
  }
}

export default EventRegister;
