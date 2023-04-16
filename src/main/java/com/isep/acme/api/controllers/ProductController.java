package com.isep.acme.api.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.isep.acme.domain.model.Product;
import com.isep.acme.domain.service.ProductService;
import com.isep.acme.dto.mapper.ProductMapper;
import com.isep.acme.dto.response.ProductResponse;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;


@Tag(name = "Product", description = "Endpoints for managing  products")
@RestController
@AllArgsConstructor
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;
    private final ProductMapper productMapper;

    @Operation(summary = "gets catalog, i.e. all products")
    @GetMapping
    public ResponseEntity<List<ProductResponse>> getCatalog() {

        List<Product> products = productService.findAll();
        List<ProductResponse> responses = productMapper.toResponseList(products);

        return ResponseEntity.ok().body(responses);
    }

    @Operation(summary = "finds product by sku")
    @GetMapping(value = "/{sku}")
    public ResponseEntity<ProductResponse> getProductBySku(@PathVariable("sku") String sku) {

        Optional<Product> optProduct = productService.findBySku(sku);
        if(optProduct.isPresent()){
            Product product = optProduct.get();
            ProductResponse response = productMapper.toResponse(product);
            return ResponseEntity.ok().body(response);
        }

        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found.");
    }

    @Operation(summary = "finds product by designation")
    @GetMapping(value = "/designation/{designation}")
    public ResponseEntity<List<ProductResponse>> findAllByDesignation(@PathVariable("designation") String designation){
        List<Product> products = productService.findByDesignation(designation);
        List<ProductResponse> responses = productMapper.toResponseList(products);
        return ResponseEntity.ok().body(responses);
    }
}