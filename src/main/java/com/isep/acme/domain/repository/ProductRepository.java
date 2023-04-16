package com.isep.acme.domain.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isep.acme.domain.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
  
  List<Product> findByDesignation(String designation);
  Optional<Product> findBySku(String sku);
  void deleteBySku(String sku);

}
