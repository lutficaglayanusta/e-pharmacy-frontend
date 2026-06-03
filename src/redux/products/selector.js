export const selectProducts = (state) => state.products.items;
export const selectPage = (state) => state.products.page;
export const selectPerPage = (state) => state.products.perPage;
export const selectTotalItems = (state) => state.products.totalItems;
export const selectTotalPages = (state) => state.products.totalPages;
export const selectHasNextPage = (state) => state.products.hasNextPage;
export const selectHasPreviousPage = (state) => state.products.hasPreviousPage;
