import React from 'react';
import Tab from './Tab';
import {tabData} from '../../data';
import PropTypes from 'prop-types';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {
          tabData.map((tab, idx) => <Tab tab={tab} changeSelected={props.changeSelected} selectedTab={props.selectedTab} key={idx}/>)
          /* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
}


export default Tabs;
