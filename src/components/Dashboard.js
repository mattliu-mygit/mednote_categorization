import React from "react";
import { toast } from "react-toastify";
import Form from "./Form";

const testData = [
  { comments: "test1", summary: "summ1" },
  { comments: "test2", summary: "summ2" },
  { comments: "test3", summary: "summ3" },
];

const Dashboard = () => {
  const [dataIndex, setDataIndex] = React.useState(0);

  return (
    <div className="w-full flex flex-col">
      <div className="w-[40rem] h-20 bg-gray-100 my-4 mx-auto rounded p-2">
        Summary: {testData[dataIndex].summary}
      </div>
      <div className="w-[40rem] h-20 bg-gray-100 my-4 mx-auto rounded p-2">
        Comments: {testData[dataIndex].comments}
      </div>
      <Form dataIndex={dataIndex} />
      <button
        type="button"
        class="mx-auto my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          setDataIndex(dataIndex !== testData.length - 1 ? dataIndex + 1 : 0);
          toast.info("Going to case" + dataIndex);
        }}
      >
        Next
        <svg
          class="ml-2 -mr-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Dashboard;
