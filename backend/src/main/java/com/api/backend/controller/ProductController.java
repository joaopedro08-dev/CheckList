package com.api.backend.controller;

import com.api.backend.dto.ProductDTO;
import com.api.backend.model.ProductModel;
import com.api.backend.service.ProductService;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService ps;

    // GET: localhost:8080/api/products/list
    @GetMapping("/list")
    public ResponseEntity<List<ProductModel>> list() {
        List<ProductModel> products = ps.listAll();
        if (products.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(products);
    }

    // GET: localhost:8080/api/products/search/{id}
    @GetMapping("/search/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        Optional<ProductModel> product = ps.getById(id);
        if (product.isPresent()) {
            return ResponseEntity.ok(product.get());
        } else {
            return ResponseEntity.status(404).body(Map.of(
                    "error", "Not Found",
                    "message", "Product with ID " + id + " not found."));
        }
    }

    // POST: localhost:8080/api/products/register
    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody ProductDTO dto) {
        ProductModel np = new ProductModel();
        np.setName(dto.getName());
        np.setQuantity(dto.getQuantity());
        np.setCategory(dto.getCategory());
        np.setPurchased("in progress");
        np.setRegister_timer(getCurrentDateTime());

        ProductModel saved = ps.save(np);
        URI location = URI.create("/api/products/search/" + saved.getId_product());
        return ResponseEntity.created(location).body(saved);
    }

    // PUT: localhost:8080/api/products/update/{id}
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @Valid @RequestBody ProductDTO dto) {
        Optional<ProductModel> existing = ps.getById(id);
        if (existing.isEmpty()) {
            return ResponseEntity.status(404).body(Map.of(
                    "error", "Not Found",
                    "message", "Product with ID " + id + " not found for update."));
        }

        ProductModel updated = existing.get();
        updated.setName(dto.getName());
        updated.setQuantity(dto.getQuantity());
        updated.setCategory(dto.getCategory());
        updated.setPurchased(dto.getPurchased());

        ProductModel saved = ps.update(id, updated);

        return ResponseEntity.ok(saved);
    }

    // DELETE: localhost:8080/api/products/delete/{id}
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<ProductModel> existing = ps.getById(id);
        if (existing.isEmpty()) {
            return ResponseEntity.status(404).body(Map.of(
                    "error", "Not Found",
                    "message", "Product with ID " + id + " not found for deletion."));
        }

        ps.delete(id);
        return ResponseEntity.ok(Map.of(
                "message", "Product with ID " + id + " successfully deleted."));
    }
    private String getCurrentDateTime() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    }
}
