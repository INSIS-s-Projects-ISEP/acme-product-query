package com.isep.acme.domain.repository;

import org.springframework.data.repository.CrudRepository;

import com.isep.acme.domain.model.ProdImage;

public interface ImageRepository extends CrudRepository<ProdImage, Long> {
}
