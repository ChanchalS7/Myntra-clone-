export const BACKEND_URL_USER = () => "https://apirest-kkir.onrender.com/user";
// export BACKEND_URL;
export const BACKEND_URL_GETPRODUCTS = (id) => `https://apirest-kkir.onrender.com/products/${id}`

export const BACKEND_URL_limit = (data) => `https://apirest-kkir.onrender.com/products?category=${data.category}&_limit=12`

export const BACKEND_URL_SIGNUP = () => "https://apirest-kkir.onrender.com/users"

export const BACKEND_URL_filter = () => "https://apirest-kkir.onrender.com/products"