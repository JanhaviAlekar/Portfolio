import React from "react";

function InlineList() {
  return (
    <div className="flex justify-center">
      <ul className="flex space-x-1">
        <li>
          <a href="#" className="text-white hover:text-gray-800">
            Link 1
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-800">
            Link 2
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-800">
            Link 3
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-800">
            Link 4
          </a>
        </li>
      </ul>
    </div>
  );
}

export default InlineList;
