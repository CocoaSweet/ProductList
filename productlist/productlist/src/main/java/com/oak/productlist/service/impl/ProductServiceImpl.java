package com.oak.productlist.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.oak.productlist.entity.ProductEntity;
import com.oak.productlist.repository.ProductRepository;
import com.oak.productlist.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{

	private final ProductRepository productRepository;
	
	public ProductServiceImpl(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

	@Override
	public List<ProductEntity> findAllProduct() {
		return productRepository.findAll();
	}

	@Override
	public Optional<ProductEntity> findById(Long id) {
		return productRepository.findById(id);
	}

	@Override
	public ProductEntity saveProduct(ProductEntity productEntity) {
		return productRepository.save(productEntity);
	}

}
