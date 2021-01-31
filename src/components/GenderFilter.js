import React from "react";

const GenderFilter = ({genderChange}) => {
  return (
    <div>
      <select onChange={e => genderChange(e)}>
        <option value=''>Select Gender</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Prefer to skip'>Prefer to Skip</option>
      </select>
    </div>
  );
};

export default GenderFilter;
