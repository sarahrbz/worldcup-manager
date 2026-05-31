package com.worldcup.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.worldcup.backend.entities.Jogador;

public interface JogadorRepository extends JpaRepository<Jogador, Long> {
    
}
