import React from 'react'
import styled from 'styled-components'

const SearchField = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  font-size: 16px
  padding: 8px 12px;
`

const SearchButton = styled.button`
  border: 1px solid #3e3e3e;
  border-radius: 4px;
  background-color: #fff;
  color: #3e3e3e;
  padding: 4px 6px;
  width: ${props => props.focused ? '500px' : '200px'};
`

const SearchContainer = styled.div`
  margin-bottom: 8px;
`

export default class Search extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      focused: false
    }
  }

  handleFocus(isFocused) {
    this.setState({ focused: isFocused })
  }

  render() {;
    return (
      <SearchContainer>
        <SearchField
          placeholder={this.props.placeholder}
          onFocus={() => this.handleFocus(true)}
          onBlur={() => this.handleFocus(false)}
          type="text"></SearchField>
        <SearchButton focused={this.state.focused}>{this.props.buttonText}</SearchButton>
      </SearchContainer>
    )
  }
}
