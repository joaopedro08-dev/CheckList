import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

function ProductEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        quantity: "",
        category: "",
        purchased: "",
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/api/products/search/${id}`)
            .then(res => setForm(res.data))
            .catch(() => alert("Erro ao carregar dados do produto."));
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/products/update/${id}`, form)
            .then(() => {
                alert("Produto atualizado com sucesso!");
                navigate("/");
            })
            .catch(() => alert("Erro ao atualizar produto."));
    };

    return (
        <div className="container mt-4">
            <h2>Edit Product</h2>
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
                <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select name="purchased" className="form-select" value={form.purchased} onChange={handleChange} required>
                        <option value="in progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="canceled">Canceled</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Save changes</button>
            </form>
            <div className="d-flex justify-content-start mb-3">
                <Link to="/" className="btn btn-link">
                    Back
                </Link>
            </div>
        </div>
    );
}

export default ProductEdit;