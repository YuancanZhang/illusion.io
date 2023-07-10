package com.example.illusion.controller;

import com.example.illusion.model.imageCreateModel;
import jakarta.persistence.EntityNotFoundException;
import com.example.illusion.model.Images;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.illusion.repo.ImagesRepository;

import java.util.Optional;

@RestController
@RequestMapping("/")
public class ImagesController {
    @Autowired
    private ImagesRepository imagesRepository;

    @RequestMapping(value = "/getImage/{id}", method = RequestMethod.GET)
    public String getImage(
            @PathVariable Long id
    ) throws EntityNotFoundException {
        Optional<Images> images = imagesRepository.findById(id);
        return images.get().getImageUrl();
    }

    @RequestMapping(value = "/addImage", method = RequestMethod.POST)
    public Images addImage(
            @RequestBody imageCreateModel image
            ) {
        Images newImage = new Images();
        newImage.setName(image.getName());
        newImage.setDescription(image.getDescription());
        newImage.setImageUrl(image.getImageUrl());
        imagesRepository.save(newImage);
        return newImage;
    }

    @RequestMapping(value = "/healthCheck", method = RequestMethod.GET)
    public String healthCheck() {
        return "healthy";
    }

    @RequestMapping(value = "/getImages", method = RequestMethod.GET)
    public Iterable<Images> getImages() {
        return imagesRepository.findAll();
    }

}
