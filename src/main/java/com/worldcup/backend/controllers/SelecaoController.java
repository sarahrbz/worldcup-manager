package com.worldcup.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.worldcup.backend.entities.Selecao;
import com.worldcup.backend.services.SelecaoService;

@RestController
@RequestMapping("/selecoes")
public class SelecaoController {

    @Autowired
    private SelecaoService service;
    
    @GetMapping
    public ResponseEntity<List<Selecao>> getAll(){
        return ResponseEntity.ok(service.findAll());
    }
}
