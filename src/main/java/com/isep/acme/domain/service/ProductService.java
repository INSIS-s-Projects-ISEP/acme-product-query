package com.isep.acme.domain.service;

import java.util.List;
import java.util.Optional;

import com.isep.acme.domain.model.Product;

public interface ProductService {

    Optional<Product> findBySku(String sku);

    Optional<Product> getProductBySku(String sku);

    List<Product> findByDesignation(String designation);

    List<Product> findAll();

    Product create(Product manager);

    Product updateBySku(String sku, Product product);

    void deleteBySku(String sku);
}
