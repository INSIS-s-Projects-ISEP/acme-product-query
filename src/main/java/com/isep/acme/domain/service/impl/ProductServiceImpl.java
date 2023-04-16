package com.isep.acme.domain.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.isep.acme.domain.model.Product;
import com.isep.acme.domain.repository.ProductRepository;
import com.isep.acme.domain.service.ProductService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public Optional<Product> getProductBySku(final String sku) {
        return productRepository.findBySku(sku);
    }

    @Override
    public Optional<Product> findBySku(String sku) {
        return productRepository.findBySku(sku);
    }

    @Override
    public List<Product> findByDesignation(String designation) {
        return productRepository.findByDesignation(designation);
    }

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Product create(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product updateBySku(String sku, Product product) {

        Product productToUpdate = productRepository.findBySku(sku).orElseThrow();
        productToUpdate.update(product);

        return productRepository.save(productToUpdate);
    }

    @Override
    public void deleteBySku(String sku) {
        productRepository.deleteBySku(sku);
    }
}
