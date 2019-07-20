import React from 'react';
import { SubHeaderStyles, SubHeaderDetails } from './styles/HeaderStyles';

const SubHeader = () => (
  <>
    <SubHeaderStyles>
      10 Most Recent Calculations:
    </SubHeaderStyles>
    <SubHeaderDetails>
      Updated in real time for any users viewing the app.
    </SubHeaderDetails>
  </>
)

export default SubHeader;