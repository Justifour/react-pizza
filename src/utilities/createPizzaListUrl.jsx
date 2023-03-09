const createPizzaListUrl = (sortingSelector, categoryIndex, searchValue) => {
  if (!searchValue) {
    if (+categoryIndex === 0) {
      return `https://63fb8c614e024687bf7a8230.mockapi.io/pizzas?sortBy=${sortingSelector}`;
    }
    return `https://63fb8c614e024687bf7a8230.mockapi.io/pizzas?category=${categoryIndex}&sortBy=${sortingSelector}`;
  } else {
    return `https://63fb8c614e024687bf7a8230.mockapi.io/pizzas?search=${searchValue}&sortBy=${sortingSelector}`;
  }
};

export {createPizzaListUrl};
