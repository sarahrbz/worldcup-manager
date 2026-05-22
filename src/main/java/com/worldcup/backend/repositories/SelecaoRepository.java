package com.worldcup.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.worldcup.backend.entities.Selecao;

public interface SelecaoRepository extends JpaRepository<Selecao, Long> {
    
}
