import React from 'react';
import { Meal } from '../../types/meal';
import styles from './meal-card.module.scss';

interface MealCardProps {
  meal: Meal;
  onRefresh: () => void;
}

const MealCard: React.FC<MealCardProps> = ({ meal, onRefresh }) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}` as keyof Meal;
    const measureKey = `strMeasure${i}` as keyof Meal;
    
    if (meal[ingredientKey]) {
      ingredients.push({
        ingredient: meal[ingredientKey],
        measure: meal[measureKey]
      });
    }
  }

  return (
    <div className={styles.mealCard}>
      <div className={styles.mealHeader}>
        <h2>{meal.strMeal}</h2>
        <div className={styles.mealMeta}>
          <span>{meal.strCategory}</span>
          <span>{meal.strArea}</span>
        </div>
      </div>
      
      <div className={styles.mealContent}>
        <div className={styles.mealImage}>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </div>
        
        <div className={styles.mealDetails}>
          <h3>Ingredents</h3>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                {item.measure} {item.ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      
      {meal.strYoutube && (
        <div className={styles.mealVideo}>
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
      )}
      
      <button className={styles.refreshButton} onClick={onRefresh}>
        Get Another Meal
      </button>
    </div>
  );
};

export default MealCard;