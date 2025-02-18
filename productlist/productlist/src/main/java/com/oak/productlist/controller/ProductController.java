package com.oak.productlist.controller;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.oak.productlist.entity.ProductEntity;
import com.oak.productlist.service.ProductService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/product")
public class ProductController {

	private final ProductService productService;

	public ProductController(ProductService productService) {
		this.productService = productService;
	}
	
	@CrossOrigin(origins = "", allowedHeaders = "*")
	@GetMapping
	public List<ProductEntity> findAllProduct(){
		return productService.findAllProduct().stream().sorted(Comparator.comparing(ProductEntity::getValue)).collect(Collectors.toList());
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping("/{id}")
	public Optional<ProductEntity> findProductById(@PathVariable("id")Long id){
		return productService.findById(id);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping
	public ProductEntity saveProduct(@RequestBody ProductEntity productEntity) {
		return productService.saveProduct(productEntity);
	}
}
