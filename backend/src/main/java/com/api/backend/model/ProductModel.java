package com.api.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

// Table in PostgreSQL
@Entity
@Table(name = "products")
@Getter
@Setter
public class ProductModel {

    // Columns
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_product;
    private String name;
    private Integer quantity;
    private String category;
    private String purchased;
    private String register_timer;
}
