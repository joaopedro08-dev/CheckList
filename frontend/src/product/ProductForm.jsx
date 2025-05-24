import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductForm() {
    const [form, setForm] = useState({
        name: "",
        quantity: "",
        category: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/products/register", form)
            .then(() => {
                alert("Produto cadastrado com sucesso!");
                setForm({ name: "", quantity: "", category: "" });
            })
            .catch(() => alert("Erro ao cadastrar produto."));
    };

    return (
        <div className="container mt-4">
            <h2>Product Registration</h2>
            <form onSubmit={handleSubmit} className="mt-3">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" value={form.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantities</label>
                    <input type="number" name="quantity" className="form-control" value={form.quantity} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Categories</label>
                    <input type="text" name="category" className="form-control" value={form.category} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-success">Register</button>
            </form>
            <div className="d-flex justify-content-start mb-3">
                <Link to="/" className="btn btn-link">
                    Back
                </Link>
            </div>
        </div>
    );
}

export default ProductForm;