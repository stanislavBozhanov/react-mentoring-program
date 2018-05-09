import React from 'react';
import TestRenderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import Footer from "../components/Footer";
import ResultBar from "../components/ResultBar";
import SearchBar from "../components/SearchBar";
import SimilarMoviesResultBar from "../components/SimilarMoviesResultBar";
import SortableResultBar from "../components/SortableResultBar";
import MovieInfo from "../components/Movies/MovieInfo";
import MovieList from "../components/Movies/MovieList";
import MoviePage from "../components/Movies/MoviePage";


// Setup Enzyme's react adapter
Enzyme.configure({adapter: new Adapter()});


it('Renders Footer component', () => {

  const tree = TestRenderer.create(<Footer/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders ResultBar component', () => {

  const tree = TestRenderer.create(<ResultBar/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders SearchBar component', () => {

  const tree = TestRenderer.create(<SearchBar/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders SimilarMoviesResultBar component', () => {

  const tree = TestRenderer.create(<SimilarMoviesResultBar/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders SortableResultBar component', () => {

  const tree = TestRenderer.create(<SortableResultBar/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders MovieInfo component', () => {

  const tree = TestRenderer.create(<MovieInfo/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders MovieList component', () => {

  const tree = TestRenderer.create(<MovieList/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders MoviePage component', () => {

  const tree = TestRenderer.create(<MoviePage/>).toJSON();
  expect(tree).toMatchSnapshot();
});


it('should change data', () => {
  const eventMock = {
    target: {
      value: 'Test value'
    }
  };

  const component = shallow(<SearchBar/>);
  component.find('input').simulate('change', eventMock);

  console.log(component);
});

