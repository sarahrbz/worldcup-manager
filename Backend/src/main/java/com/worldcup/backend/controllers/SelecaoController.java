package com.worldcup.backend.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

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

    @GetMapping("{id}")
    public ResponseEntity<Selecao> getById(@PathVariable long id){
        return ResponseEntity.ok(service.findById(id));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteById(@PathVariable long id){
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<Selecao> save(@RequestBody Selecao selecao){
        Selecao s = service.save(selecao);

        URI location = ServletUriComponentsBuilder
                        .fromCurrentRequest()
                        .path("/{id}")
                        .buildAndExpand(s.getId())
                        .toUri();
        return ResponseEntity.created(location).body(s);
    }

    @PutMapping("{id}")
    public ResponseEntity<Void> update(@RequestBody Selecao selecao, @PathVariable Long id){
        service.update(selecao, id);
        return ResponseEntity.noContent().build();
    }
}
