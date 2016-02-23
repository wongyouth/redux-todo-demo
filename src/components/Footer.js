import React from "react";
import FilterLink from '../containers/FilterLink';

export default () => {
  return (
    <div>
      Show:
      {" "}
      <FilterLink filter='ALL'>
        All
      </FilterLink>
      {" "}
      <FilterLink filter='ACTIVE'>
        Active
      </FilterLink>
      {" "}
      <FilterLink filter='COMPLETED'>
        Complete
      </FilterLink>
    </div>
  );
};
