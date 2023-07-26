// Common pattern: have multiple selectors that perform logic to transform raw API data into something useful

// Think about memoization when you have pure functions b/c the output should not change given the same inputs

import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categorieSlice) => categorieSlice.categories
);

// End result: useSelector only produces new categories map when the category reducer is updated
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) =>
        categories.reduce((acc, docSnapshot) => {
            const { title, items } = docSnapshot;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
);
