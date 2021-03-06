import React from "react";

export const Security = props => {
  const { oauth } = props;
  return (
    <div className="md:flex md:items-start -mx-2 mt-4">
      <div className="sm-full md-1/4 px-2">
        <h3 className="mt-0">Authorizations</h3>
      </div>
      <div
        className="sm-full md:flex md:flex-col md-3/4 px-2"
        style={{ marginTop: 2 }}
      >
        <div>Personal Access Token</div>
        <div>
          <span>OAuth: </span>( <span className="tag tag-light">{oauth}</span>)
        </div>
      </div>
    </div>
  );
};

export default Security;
