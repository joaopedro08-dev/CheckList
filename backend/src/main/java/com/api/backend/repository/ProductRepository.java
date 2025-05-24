package com.api.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.backend.model.ProductModel;

public interface ProductRepository extends JpaRepository<ProductModel, Long> {
    
}
