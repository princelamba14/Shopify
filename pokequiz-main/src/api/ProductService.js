import axios from 'axios';

const BASE_URL =
  'https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=27&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response?.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
