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

import com.worldcup.backend.dtos.JogadorRequest;
import com.worldcup.backend.dtos.JogadorResponse;
import com.worldcup.backend.services.JogadorService;

@RestController
@RequestMapping("/jogadores")
public class JogadorController {

    @Autowired
    private JogadorService service;

    @GetMapping
    public ResponseEntity<List<JogadorResponse>> getAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<JogadorResponse> getById(@PathVariable Long id){
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<JogadorResponse> save(@RequestBody JogadorRequest jogador){
        JogadorResponse j = service.save(jogador);

        URI location = ServletUriComponentsBuilder
                        .fromCurrentRequest()
                        .path("/{id}")
                        .buildAndExpand(j.id())
                        .toUri();
        return ResponseEntity.created(location).body(j);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@RequestBody JogadorRequest jogador, @PathVariable Long id){
        service.update(jogador, id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }


}
