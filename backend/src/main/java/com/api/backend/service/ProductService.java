package com.api.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.model.ProductModel;
import com.api.backend.repository.ProductRepository;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class ProductService {

    @Autowired
    private ProductRepository pr;

    public List<ProductModel> listAll() {
        return pr.findAll();
    }

    public Optional<ProductModel> getById(Long id) {
        return pr.findById(id);
    }

    public ProductModel save(ProductModel product) {
        return pr.save(product);
    }

    public ProductModel update(Long id, ProductModel updatedProduct) {
        return pr.findById(id).map(existing -> {
            existing.setName(updatedProduct.getName());
            existing.setQuantity(updatedProduct.getQuantity());
            existing.setCategory(updatedProduct.getCategory());
            existing.setPurchased(updatedProduct.getPurchased());
            existing.setRegister_timer(getCurrentDateTime());
            return pr.save(existing);
        }).orElseThrow(() -> new RuntimeException("Product not found"));
    }

    public void delete(Long id) {
        pr.deleteById(id);
    }

    private String getCurrentDateTime() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    }
}
