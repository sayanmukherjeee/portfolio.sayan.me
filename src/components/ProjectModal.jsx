// src/components/ProjectModal.jsx
import React from "react";

const ProjectModal = ({ project, onClose }) => (
  <div
    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-2xl shadow-xl w-[90%] max-w-3xl p-6 relative"
      onClick={e => e.stopPropagation()}
    >
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        onClick={onClose}
      >
        ✕
      </button>
      <h3 className="text-2xl font-bold mb-4">{project.name}</h3>

      <div className="overflow-x-auto">
        <div className="flex gap-4">
          {project.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.name} screenshot ${i + 1}`}
              className="h-64 rounded-lg flex-shrink-0 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectModal;
