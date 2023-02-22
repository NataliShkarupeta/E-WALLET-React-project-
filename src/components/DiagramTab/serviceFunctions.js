export const deleteIncomeInArray = (array) => {
  const filteredArray = array.filter(category => category.type !== 'INCOME');
  return filteredArray;
};

export const deleteIncomeObject = (object) => {
  const updatedObject = { ...object };
  updatedObject.categoriesSummary = deleteIncomeInArray(updatedObject.categoriesSummary);

  return updatedObject;
};

export const addArrayToObj = (obj, array) => {
  const updatedObj = { ...obj };
  updatedObj.categoriesSummary = array;
  return updatedObj;
};

export const addColorToArray = (summary, colorMap) => {
  const updatedCategoriesSummary = summary.categoriesSummary.map(category => {
    const color = colorMap[category.name];
    if (color) {
      return { ...category, color: color };
    }
    return { ...category };
  });
  return updatedCategoriesSummary;
};


