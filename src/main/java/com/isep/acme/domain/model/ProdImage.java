package com.isep.acme.domain.model;

import javax.annotation.Resource;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import com.isep.acme.dto.ImageDTO;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ProdImage {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "product_id")
    private Product product;

    @Lob
    private Resource image;

    public ImageDTO toDto() {
        return new ImageDTO(this.id, product.getProductId());
    }
}
