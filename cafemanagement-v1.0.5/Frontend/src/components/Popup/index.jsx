// components/Popup.jsx
import React from "react";
import PropTypes from "prop-types";
import { Button } from "../"; // Import Button or adjust the import path
import { X } from "lucide-react";

const Popup = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-70 bg-slate-200 ">
      <div className="bg-slate-100 p-8 max-w-md mx-auto rounded shadow-lg flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button  onClick={onClose} className="place-self-end">
            <X size={30} />
          </button>
        </div>
        <div className="max-h-60 overflow-y-auto ">{children}</div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Popup;
