# Flip Deal Product Listing Page
FlipDeal is an eCommerce company that sells various kinds of phones.
## **What are the various user actions?**
1.  Select the following sorting options and see the products getting sorted:  
    1.  Popularity
    2.  Price hight-to-low
    3.  Price low-to-high
2.  Select any filter based on the:
    1.  RAM
    2.  ROM 
    3.  OS   
    4.  Brand    
    5.  Price
The products are listed based on the filters applied.

### Endpoint 1: Get the products sorted by popularity
```
<http://localhost:3000/products/sort/popularity>
```
### Endpoint 2: Get the products sorted by “high-to-low” price
```
<http://localhost:3000/products/sort/price-high-to-low>
```
### Endpoint 3: Get the products sorted by “low-to-high” price
```
<http://localhost:3000/products/sort/price-low-to-high>
```
### Endpoint 4: Filter the products based on the “RAM” option.
```
<http://localhost:3000/products/filter/ram?ram=8>
```
### Endpoint 5: Filter the products based on the “ROM” option.
```
<http://localhost:3000/products/filter/rom?rom=64>
```
### Endpoint 6: Filter the products based on the “Brand” option.
```
<http://localhost:3000/products/filter/brand?brand=apple>
```
### Endpoint 7: Filter the products based on the “OS” option.
```
<http://localhost:3000/products/filter/os?os=Android>
```
### Endpoint 8: Filter the products based on the “Price” option.
```
<http://localhost:3000/products/filter/price?price=30000>
```
### Endpoint 9: Send original array of products
```
<http://localhost:3000/products>
```
  **Deployed Link:**  [flipdeal-product-listing-page](https://flip-deal-product-listing-page-kappa.vercel.app/products)
  
  **Note:** Check API endpoints on the deployed link or use this frontend application - [UI](https://bd2-listing-page.vercel.app/) to API response.
