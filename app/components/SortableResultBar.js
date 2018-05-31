import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setSortType} from "../actions/actions";


class SortableResultBar extends Component {
  render() {
    return (
      <div>
        <span>{this.props.sortText}</span>
        <div>
          <span>Sort by</span>
          <button onClick={() => this.props.setSortType('release_date')}>release date</button>
          <button onClick={() => this.props.setSortType('rating')}>rating</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sortText: state.sortText
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSortType
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortableResultBar);
