import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/products/list")
            .then((response) => {
                const sortedProducts = response.data.sort((a, b) => a.id_product - b.id_product);
                setProducts(sortedProducts);
                setLoading(false);
            })
            .catch((err) => {
                setError("Error to loading products.");
                setLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Tem certeza que deseja excluir este produto?")) {
            axios.delete(`http://localhost:8080/api/products/delete/${id}`)
                .then(() => {
                    setProducts(products.filter(p => p.id_product !== id));
                })
                .catch(() => alert("Erro ao excluir produto."));
        }
    };

    if (loading) return <div className="alert alert-info">loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div className="container mt-4">
            <h2>List of products</h2>
            <table className="table table-striped table-bordered mt-3">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantities</th>
                        <th>Categories</th>
                        <th>Status</th>
                        <th>Register</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((prod) => (
                            <tr key={prod.id_product}>
                                <td>{prod.id_product}</td>
                                <td>{prod.name}</td>
                                <td>{prod.quantity}</td>
                                <td>{prod.category}</td>
                                <td>{prod.purchased.toUpperCase()}</td>
                                <td>{new Date(prod.register_timer).toLocaleString()}</td>
                                <td>
                                    <a href={`/edit/${prod.id_product}`} className="btn btn-warning btn-sm me-2">Edit</a>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(prod.id_product)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">No products found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="d-flex justify-content-end mb-3">
                <Link to="/register" className="btn btn-success">
                    Register
                </Link>
            </div>
        </div>
    );
}

export default ProductList;