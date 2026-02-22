// @flow strict

import * as React from "react";

function ProjectCard({ project }) {
  return (
    <div className="from-white border-gray-200 relative rounded-lg border bg-gradient-to-r to-gray-50 w-full shadow-sm">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-gray-400"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-gray-400 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-400"></div>
        </div>
        <p className="text-center ml-3 text-black font-semibold text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-gray-200 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-blue-600">const</span>
            <span className="mr-2 text-black">project</span>
            <span className="mr-2 text-blue-600">=</span>
            <span className="text-gray-600">{"{"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-black">name:</span>
            <span className="text-gray-600">{`'`}</span>
            <span className="text-green-700">{project.name}</span>
            <span className="text-gray-600">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-black">tools:</span>
            <span className="text-gray-600">{` ['`}</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-green-700">{tag}</span>
                {project.tools.length - 1 !== i && (
                  <span className="text-gray-600">{`', '`}</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray-600">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-black">myRole:</span>
            <span className="text-orange-600">{project.role}</span>
            <span className="text-gray-600">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-black">Description:</span>
            <span className="text-blue-700">{" " + project.description}</span>
            <span className="text-gray-600">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-black">Live URL:</span>
            <a
              href={project.liveUrl}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.demo}
            </a>
            <span className="text-gray-600">,</span>
          </div>
          <div>
            <span className="text-gray-600">{`};`}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
