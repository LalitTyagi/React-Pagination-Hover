import React, { Component, Fragment } from "react";

//
class HoverScroll extends Component {
  state = {
    allCountries: [], //data: [],
    offset: 10
  };

  componentDidMount() {
    const url = `https://restcountries.eu/rest/v2/all`;
    fetch(url)
      .then(res => res.json())
      .then(result => {
        // console.log("--->", result);
        this.setState({
          allCountries: result,
          scrolling: false,
          totalPages: result.length
        });
      });

    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }
  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      this.setState({
        offset: this.state.offset + 10
      });
    }
  };

  render() {
    const currentCountries = this.state.allCountries.slice(
      0,
      this.state.offset
    );
    return (
      <div>
        {currentCountries.map((country, i) => (
          <Fragment>
            <img src={country.flag} alt={country.flag} />
            <span>{country.name}</span>
            <br />
            <span>{country.region}</span>
            <br />
            <br />
          </Fragment>
        ))}
      </div>
    );
  }
}

export default HoverScroll;
