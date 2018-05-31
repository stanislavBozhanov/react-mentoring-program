import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setReleaseDateSortType, setTitleSortType} from "../actions/actions";


class SortableResultBar extends Component {
  render() {
    return (
      <div>
        <span>{this.props.sortText}</span>
        <div>
          <span>Sort by</span>
          <button onClick={() => this.props.setReleaseDateSortType()}>release date</button>
          <button onClick={() => this.props.setTitleSortType()}>title</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sortText: state.sortText
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setReleaseDateSortType: () => dispatch(setReleaseDateSortType()),
    setTitleSortType: () => dispatch(setTitleSortType())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortableResultBar);
