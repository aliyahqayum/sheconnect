import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Col, Card } from "react-materialize";

class SuggestionsHeader extends Component {
  render() {
    return (
      <Col s={12}>
        <Card
          className="suggestions-header"
          textClassName="white-text"
          title="Your profile suggestions"
          actions={[
            <NavLink
              key={1}
              className="suggestions-header-links"
              to={"/users/profile/" + this.props.username}
            >
              Check my profile
              <i className="material-icons link-icon">person</i>
            </NavLink>
          ]}
        >
          We found potential people you might be interested in!
          </p>
        </Card>
      </Col>
    );
  }
}

export default SuggestionsHeader;
