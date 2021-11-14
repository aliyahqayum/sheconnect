import React, { Component } from "react";
import DistanceSlider from "../settings/DistanceSlider";
import PopularitySlider from "../settings/PopularitySlider";
import InterestTagsDumb from "../settings/InterestTagsDumb";

class SearchCriteria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 5,
      popularityRange: [0, 1000],
      userTags: [],
      allTags: []
    };
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.searchDataToParent({
      distance: this.state.distance,
      popularityRange: this.state.popularityRange,
      userTags: this.state.userTags
    });
  }
    this.props.searchDataToParent({
      distance: this.state.distance,
      popularityRange: this.state.popularityRange,
      userTags: this.state.userTags
    });
  };

  handleDistanceData = data => {
    this._isMounted &&
      this.setState({
        distance: data
      });
    this.props.searchDataToParent({
      distance: data,
      popularityRange: this.state.popularityRange,
      userTags: this.state.userTags
    });
  };

  handlePopularityData = data => {
    this._isMounted &&
      this.setState({
        popularityRange: data
      });
    this.props.searchDataToParent({
      distance: this.state.distance,
      popularityRange: data,
      userTags: this.state.userTags
    });
  };

  handleInterestsData = data => {
    this._isMounted &&
      this.setState({
        userTags: data
      });
    this.props.searchDataToParent({
      distance: this.state.distance,
      popularityRange: this.state.popularityRange,
      userTags: data
    });
  };


  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="search-criteria">
        <span className="profile-fields-labels">Age</span>
        />
        <DistanceSlider
          value={this.state.distance}
          distanceToParent={this.handleDistanceData}
        />
        <PopularitySlider
          range={this.state.popularityRange}
          popularityToParent={this.handlePopularityData}
        />
        <span className="profile-fields-labels">Interests</span>
        <InterestTagsDumb
          tags={this.state.userTags}
          allTags={this.props.allTags}
          interestsToParent={this.handleInterestsData}
        />
      </div>
    );
  }
}

export default SearchCriteria;
