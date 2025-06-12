import React from 'react';

function EmployeeDashboard() {
  const tasks = [
    { id: 1, title: 'Ek aur task', priority: 'High', date: '20 Feb 2024', status: 'completed' },
    { id: 2, title: 'Example task', priority: 'High', date: '20 Feb 2024', status: 'completed' },
    { id: 3, title: 'Task...', priority: 'High', date: '8 Feb 2024', status: 'failed' },
  ];

  const stats = {
    newTask: 0,
    accepted: 0,
    completed: 3,
    failed: 1,
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Hello, Sarthak 👋</h1>
        </div>
        <button className="bg-red-600 px-4 py-2 rounded">Log Out</button>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-600 p-4 rounded-lg text-center">
          <p className="text-2xl">{stats.newTask}</p>
          <p>New Task</p>
        </div>
        <div className="bg-green-600 p-4 rounded-lg text-center">
          <p className="text-2xl">{stats.completed}</p>
          <p>Completed</p>
        </div>
        <div className="bg-yellow-600 p-4 rounded-lg text-center">
          <p className="text-2xl">{stats.accepted}</p>
          <p>Accepted</p>
        </div>
        <div className="bg-red-600 p-4 rounded-lg text-center">
          <p className="text-2xl">{stats.failed}</p>
          <p>Failed</p>
        </div>
      </div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 rounded-lg ${
              task.status === 'completed' ? 'bg-green-600' :
              task.status === 'failed' ? 'bg-red-600' : 'bg-gray-600'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="text-red-500 font-bold">{task.priority}</span>
              <span className="text-sm">{task.date}</span>
            </div>
            <p className="mt-2">{task.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeDashboard;