package com.worldcup.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.worldcup.backend.entities.Selecao;
import com.worldcup.backend.repositories.SelecaoRepository;

@Service
public class SelecaoService {
    @Autowired
    private SelecaoRepository repository;

    public List<Selecao> findAll() {
        return repository.findAll();
    }
    
    public Selecao findById(Long id) {
        return repository.findById(id).orElse(null);
    }
}
