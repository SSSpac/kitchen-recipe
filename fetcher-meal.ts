import { useState, useEffect } from 'react';
import axios from 'axios';
import { Meal, MealsResponse } from '../types/meal';

const useFetchMeal = () => {
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomMeal = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get<MealsResponse>('https://www.themealdb.com/api/json/v1/1/random.php'
      );
      setMeal(response.data.meals[0]);
    } catch (err) {
      setError('Failed to find meal. Please  again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  return { meal, loading, error, fetchRandomMeal };
};

export default useFetchMeal;