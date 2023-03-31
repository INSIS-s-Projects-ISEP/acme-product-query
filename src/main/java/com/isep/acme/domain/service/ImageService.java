package com.isep.acme.domain.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import com.isep.acme.domain.model.ProdImage;
import com.isep.acme.domain.repository.ImageRepository;
import com.isep.acme.dto.ImageDTO;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ImageService {

     private final FileStorageService service;
     private final ImageRepository repository;
     private String filename;

     public Iterable<ImageDTO> getImageProduct() {
          Iterable<ProdImage> p = repository.findAll();
          List<ImageDTO> iDto = new ArrayList<>();
          for (ProdImage pd : p) {
               iDto.add(pd.toDto());
          }
          return iDto;
     };

     public Resource addImage(Resource image) {          
         return service.loadFileAsResource(filename);
     }

}
