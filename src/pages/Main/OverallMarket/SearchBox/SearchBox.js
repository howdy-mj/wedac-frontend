import React, { Component } from "react";
import styled, { css } from "styled-components";
import searchIcon from "../../../../images/search.png";

class SearchBox extends Component {
  render() {
    return (
      <>
        <Input
          type="text"
          placeholder="코인명 검색"
          onChange={this.props.handleChange}
        />
        <Img src={searchIcon} alt="icon" />
      </>
    );
  }
}

const Input = styled.input`
  position: relative;
  height: 28px;
  width: 250px;
  border: 1px solid #ebeef6;
  font-size: 12px;

  &::placeholder {
    color: #bfc6cf;
    padding-left: 10px;
  }
`;

const Img = styled.img`
  /* position: absolute;
  right: 300px;
  top: 47px; */
  height: 18px;
  width: 18px;
`;

export default SearchBox;
