package com.oak.productlist.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.oak.productlist.entity.ProductEntity;
import com.oak.productlist.service.ProductService;

@RestController
@RequestMapping("/product")
public class ProductController {

	private final ProductService productService;

	public ProductController(ProductService productService) {
		this.productService = productService;
	}
	
	@GetMapping
	public List<ProductEntity> findAllProduct(){
		return productService.findAllProduct();
	}
	
	@GetMapping("/{id}")
	public Optional<ProductEntity> findProductById(@PathVariable("id")Long id){
		return productService.findById(id);
	}
	
	@PostMapping
	public ProductEntity saveProduct(@RequestBody ProductEntity productEntity) {
		return productService.saveProduct(productEntity);
	}
}
