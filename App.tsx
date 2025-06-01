import React from 'react';
import useFetchMeal from './finder/fetcher-meal';
import MealCard from './components/meal/meal-card';
import LoadingSpinner from './components/load/spin';
import './App.scss';

const App: React.FC = () => {
  const { meal, loading, error, fetchRandomMeal } = useFetchMeal();

  return (
    <div className="app">
      <header className="appHeader">
        <h1>Random Meal </h1>
        <p>Get a free meal</p>
      </header>
      
      <main className="appMain">
        {loading && <LoadingSpinner />}
        {error && <div className="errorMessage">{error}</div>}
        {meal && <MealCard meal={meal} onRefresh={fetchRandomMeal} />}
      </main>
      
      <footer className="appFooter">
        <p>sweden 2025 072212232</p>
      </footer>
    </div>
  );
};

export default App;