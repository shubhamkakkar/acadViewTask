import React, { Component } from "react";
import EventRegister from "./EventRegister";
import EventRegister_2 from "./EventRegister_2";
import { Container } from "semantic-ui-react";
class App extends Component {
  render() {
    return (
      <Container>
        <EventRegister />
        {/* <EventRegister_2 /> */}
      </Container>
    );
  }
}

export default App;
