# ci4-reactjs
Belajar fullstack menggunakan ReactJS (Frontend) dan CodeIgniter4 (Backend)

--------------------------------------------------
API Spec :
--------------------------------------------------
# Index (Show all data)
- Method : GET
- URL : https://localhost:8080/products

# Show
- Method : GET
- URL : https://localhost:8080/products/:id

# Create
- Method : POST
- URL : https://localhost:8080/products
- Params :
  - "title" : string
  - "price" : integer

# Update
- Method : PATCH
- URL : https://localhost:8080/products/:id
- Params :
  - "title" : string
  - "price" : integer

# Delete
- Method : DELETE
- URL : https://localhost:8080/products/:id
