import React, { useState } from 'react';

function AdminDashboard() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    assignTo: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle task creation logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="flex items-center mb-6">
        <button className="text-gray-400 mr-4">←</button>
        <h2 className="text-xl font-bold">Create Task</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Task Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Make a UI design"
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Detailed description of task (Max 500 words)"
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 h-24"
          />
        </div>
        <div>
          <label className="block mb-1">Date</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="dd/mm/yyyy"
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label className="block mb-1">Assign To</label>
          <input
            type="text"
            name="assignTo"
            value={formData.assignTo}
            onChange={handleChange}
            placeholder=""
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label className="block mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Design, Development, etc..."
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-700 text-white p-2 rounded-lg hover:bg-red-600 transition"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}

export default AdminDashboard;