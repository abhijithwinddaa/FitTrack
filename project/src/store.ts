import { create } from 'zustand';
import { format } from 'date-fns';

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
}

export interface Workout {
  id: string;
  date: string;
  type: 'strength' | 'cardio' | 'flexibility';
  duration: number;
  exercises: Exercise[];
}

interface WorkoutStore {
  workouts: Workout[];
  addWorkout: (workout: Omit<Workout, 'id' | 'date'>) => void;
  removeWorkout: (id: string) => void;
}

export const useWorkoutStore = create<WorkoutStore>((set) => ({
  workouts: [
    {
      id: '1',
      date: format(new Date(), 'yyyy-MM-dd'),
      type: 'strength',
      duration: 60,
      exercises: [
        {
          id: '1',
          name: 'Bench Press',
          sets: 3,
          reps: 10,
          weight: 135,
        },
        {
          id: '2',
          name: 'Squats',
          sets: 4,
          reps: 8,
          weight: 185,
        },
      ],
    },
  ],
  addWorkout: (workout) =>
    set((state) => ({
      workouts: [
        {
          ...workout,
          id: Math.random().toString(36).substr(2, 9),
          date: format(new Date(), 'yyyy-MM-dd'),
        },
        ...state.workouts,
      ],
    })),
  removeWorkout: (id) =>
    set((state) => ({
      workouts: state.workouts.filter((workout) => workout.id !== id),
    })),
}));