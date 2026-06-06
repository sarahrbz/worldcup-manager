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

import com.worldcup.backend.dtos.PartidaRequest;
import com.worldcup.backend.dtos.PartidaResponse;
import com.worldcup.backend.services.PartidaService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/partidas")
public class PartidaController {
    
    @Autowired
    private PartidaService service;

    @GetMapping
    public ResponseEntity<List<PartidaResponse>> getAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PartidaResponse> getById(@PathVariable Long id){
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<PartidaResponse> save(@Valid @RequestBody PartidaRequest partida) {
        PartidaResponse p = service.save(partida);

        URI location = ServletUriComponentsBuilder
                        .fromCurrentRequest()
                        .path("/{id}")
                        .buildAndExpand(p.id())
                        .toUri();
        return ResponseEntity.created(location).body(p);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@Valid @RequestBody PartidaRequest partida, @PathVariable Long id){
        service.update(partida, id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
