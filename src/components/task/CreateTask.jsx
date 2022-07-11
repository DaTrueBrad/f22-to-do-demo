import React from "react";
import { useFormik } from "formik";
import axios from "axios";

const CreateTask = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      category: null,
    },
    onSubmit: async (values) => {
      console.log(values)
      // axios
      //   .post("http://localhost:4000/api/addTask", values)
      //   .then((res) => getTasks());
    },
  });

  return (
    <form className="task-form" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name your Task"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <select value={formik.values.category} name="category" onChange={formik.handleChange}>
        <option selected disabled defaultValue>
          Category
        </option>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Errands">Errands</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default CreateTask;
