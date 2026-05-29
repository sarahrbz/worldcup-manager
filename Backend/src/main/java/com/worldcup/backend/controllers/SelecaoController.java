package com.worldcup.backend.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.worldcup.backend.dtos.SelecaoRequest;
import com.worldcup.backend.dtos.SelecaoResponse;

import com.worldcup.backend.services.SelecaoService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/selecoes")
@CrossOrigin
public class SelecaoController {

    @Autowired
    private SelecaoService service;
    
    @GetMapping
    public ResponseEntity<List<SelecaoResponse>> getAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<SelecaoResponse> getById(@PathVariable long id){
        return ResponseEntity.ok(service.findById(id));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteById(@PathVariable long id){
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<SelecaoResponse> save(@Valid @RequestBody SelecaoRequest selecao){
        SelecaoResponse s = service.save(selecao);

        URI location = ServletUriComponentsBuilder
                        .fromCurrentRequest()
                        .path("/{id}")
                        .buildAndExpand(s.id())
                        .toUri();
        return ResponseEntity.created(location).body(s);
    }

    @PutMapping("{id}")
    public ResponseEntity<Void> update(@Valid @RequestBody SelecaoRequest selecao, @PathVariable Long id){
        service.update(selecao, id);
        return ResponseEntity.noContent().build();
    }
}
