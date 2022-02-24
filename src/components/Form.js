import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const initialState = {
  infectious: 0,
  developmental: 0,
  traumatic: 0,
  neoplastic: 0,
  seizureRelated: 0,
  vascular: 0,
  degenerative: 0,
  hypoxicIschemic: 0,
};

const Form = (props) => {
  const [formSelections, setFormSelections] = useState(initialState);

  useEffect(() => {
    document.getElementById("diagnosis").reset();
    setFormSelections(initialState);
  }, [props.dataIndex]);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(
      `Save it to a file of id ${props.dataIndex} or something here!!!`
    );
    toast.success("Form submitted successfully to " + props.dataIndex + "!");
  };

  const onChangeHandlerFactory = (field) => () => {
    setFormSelections({
      ...formSelections,
      [field]: formSelections[field] === 1 ? 0 : 1,
    });
  };

  return (
    <form
      className="flex flex-col w-80 mx-auto bg-gray-100 p-4 rounded mt-2"
      onSubmit={submitForm}
      id="diagnosis"
    >
      <label className="h-7 flex flex-row">
        Infectious:
        <input
          className="ml-2 h-4 w-4 my-auto"
          type="checkbox"
          name="name"
          onChange={onChangeHandlerFactory("infectious")}
        />
      </label>
      <label className="h-7 flex flex-row">
        Developmental:
        <input
          className="ml-2 h-4 w-4 my-auto"
          type="checkbox"
          name="name"
          onChange={onChangeHandlerFactory("developmental")}
        />
      </label>
      <label className="h-7 flex flex-row">
        Traumatic:
        <input
          className="ml-2 h-4 w-4 my-auto"
          type="checkbox"
          name="name"
          onChange={onChangeHandlerFactory("traumatic")}
        />
      </label>
      <label className="h-7 flex flex-row">
        Neoplastic:
        <input
          className="ml-2 h-4 w-4 my-auto"
          type="checkbox"
          name="name"
          onChange={onChangeHandlerFactory("neoplastic")}
        />
      </label>
      <label className="h-7 flex flex-row">
        Seizure Related:
        <input
          className="ml-2 h-4 w-4 my-auto"
          type="checkbox"
          name="name"
          onChange={onChangeHandlerFactory("seizureRelated")}
        />
      </label>
      <label className="h-7 flex flex-row">
        Vascular:
        <input
          className="ml-2 h-4 w-4 my-auto"
          type="checkbox"
          name="name"
          onChange={onChangeHandlerFactory("vascular")}
        />
      </label>
      <label className="h-7 flex flex-row">
        Degenerative:
        <input
          className="ml-2 h-4 w-4 my-auto"
          type="checkbox"
          name="name"
          onChange={onChangeHandlerFactory("degenerative")}
        />
      </label>
      <label className="h-7 flex flex-row">
        <div>Hypoxic Ischemic:</div>
        <input
          className="ml-2 h-4 w-4 my-auto"
          type="checkbox"
          name="name"
          onChange={onChangeHandlerFactory("hypoxicIschemic")}
        />
      </label>

      <input
        type="submit"
        value="Save"
        class="text-blue-700 hover:text-white cursor-pointer mt-4 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
      />
    </form>
  );
};

export default Form;
