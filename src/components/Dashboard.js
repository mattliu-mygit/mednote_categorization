import React from "react";
import { toast } from "react-toastify";
import Form from "./Form";

const testData = [
  {
    comments:
      "Microscopic section is pending.M.D.Neuropathologistvbl, Microscopic section from the right hippocampal formation shows complete atrophy   both of the dentate gyrus and hippocampal gyrus.  There is complete obliteration of these regions with marked gliosis.  This is diagnostic of hippocampal sclerosis.",
    summary:
      "1.Multiple old contusions of the frontal and temporal lobes.2. Subarachnoid hemorrhage  frontal lobes  minimal.3. Right hippocampal atrophy.4. Normal spinal cord.",
  },
  {
    comments:
      "Jimmy McLeod  Sr.Case #10-3859June 16  2010NEUROPATHOLOGY REPORT(Continued)Comment:In terms of the age of the lesions present in this brain  all of the contusions are old.  The subarachnoid hemorrhage of the right temporal lobe is fresh.M.D.Neuropathologistvbl,NA",
    summary:
      "1.Subarachnoid hemorrhage of the right temporal lobe  fresh.2. Old contusions of the right frontal pole  orbito-frontal regions  and right temporal lobe.3. Hydrocephalus  mild.",
  },
  {
    comments:
      "Microscopic section is pending.M.D.Neuropathologistvbl, Microscopic sections were taken from the right parietal white matter at the site of a large vessel.  Microscopic examination shows a vascular malformation of the white matter composed of many vessels with very thin walls   many of them a single cell endothelium.  There are no infarcts or hemorrhages.",
    summary:
      "1.Subdural hemorrhages  organized  minimal.2.Multiple old contusions of the frontal and temporal lobes.3.Hydrocephalus  mild.4.Vascular malformation and hemorrhage of the right parietal white matter.5.Atherosclerosis of the cerebral vessels  mild.",
  },
];

const Dashboard = () => {
  const [dataIndex, setDataIndex] = React.useState(0);

  return (
    <div className="w-full flex flex-col">
      <div className="w-[40rem] h-min min-h-20  bg-gray-100 my-4 mx-auto rounded p-2">
        <b>Summary:</b> {testData[dataIndex].summary}
      </div>
      <div className="w-[40rem] h-min min-h-20 bg-gray-100 my-4 mx-auto rounded p-2">
        <b>Comments:</b> {testData[dataIndex].comments}
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
