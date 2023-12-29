import { useParams } from "react-router-dom";
import mockData from "../assets/mockData";

function ProductDetails() {
  const { id } = useParams(); // Get the product id from URL params
  const product = mockData.find((p) => p.id === parseInt(id)); // Find the product by id

  if (!product) {
    return <div>Product not found</div>; //what to display if product id was not found in data
  }
  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <img src={product.image} alt={product.name} />
        <table>
          <tbody>
            <tr>
              <td>
                <h3>Name:</h3>
              </td>
              <td>
                <p>{product.name}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Price:</h3>
              </td>
              <td>
                <p className="product-price">${product.price}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Description:</h3>
              </td>
              <td>
                <p>{product.description || "No description available."}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>inStock:</h3>
              </td>
              <td>
                <p>{product.inStock}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Comments:</h3>
              </td>
              <td>
                <p>{product.comments}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductDetails;
