import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

let StyledTab = styled.div`
  margin: 0% 2%;
  border: 1px solid black;
  padding: 1px;
`
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      
  return (
    <StyledTab
      onClick={() => props.changeSelected(props.tab)}
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      // }
    >
      {props.tab.toUpperCase()}
    </StyledTab>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string
}

export default Tab;
