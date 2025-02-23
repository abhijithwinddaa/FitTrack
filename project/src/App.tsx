import React from 'react';
import { Activity } from 'lucide-react';
import { useWorkoutStore } from './store';
import WorkoutList from './components/WorkoutList';
import AddWorkoutModal from './components/AddWorkoutModal';
import WorkoutStats from './components/WorkoutStats';
import ExerciseChart from './components/ExerciseChart';
import './index.css'; 

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">FitTrack</h1>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log Workout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">Progress Overview</h2>
              <ExerciseChart />
            </div>
            <WorkoutList />
          </div>
          <div className="lg:col-span-1">
            <WorkoutStats />
          </div>
        </div>
      </main>

      <AddWorkoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;