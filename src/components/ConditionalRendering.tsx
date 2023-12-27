import React, { Component } from "react";
import PropTypes from "prop-types";
import { Divi } from "aess-calculator/function2";

const ConditionalRendering = () => {
  let content;
  let isLoggedIn = true;
  let newCondition = true;
  let nCond1 = true;
  if (isLoggedIn) {
    content = <div>Admin Panel</div>;
  } else {
    content = <div>Login Panel</div>;
  }
  // always use condition ? : in markup language
  return (
    <div className="flex flex-col p-12 gap-4">
      {content}
      if you prefer more compact code, you can use the conditional ? operator.
      Unlike 'if' , it works inside Jsx:
      {newCondition ? (
        <div className="font-semibold text-base bg-slate-400">Condition true</div>
      ) : (
        <div className="font-medium text-base bg-blue-500">Condition False</div>
      )}
      {nCond1 && <div className="font-semibold text-base bg-red-500">AND Condition true</div>}
    </div>
  );
};

export default ConditionalRendering;
