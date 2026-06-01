package com.worldcup.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.worldcup.backend.dtos.JogadorRequest;
import com.worldcup.backend.dtos.JogadorResponse;
import com.worldcup.backend.entities.Jogador;
import com.worldcup.backend.entities.Selecao;
import com.worldcup.backend.mappers.JogadorMapper;
import com.worldcup.backend.repositories.JogadorRepository;
import com.worldcup.backend.repositories.SelecaoRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class JogadorService {

    @Autowired
    private JogadorRepository repository;

    @Autowired
    private SelecaoRepository selecaoRepository;

    public List<JogadorResponse> findAll(){
        return repository.findAll()
            .stream()
            .map(JogadorMapper::toDTO)
            .toList();
    }

    public JogadorResponse findById(Long id){
        return repository.findById(id)
            .map(JogadorMapper::toDTO)
            .orElseThrow(() -> new EntityNotFoundException("Jogador não encontrado"));
    }

    public JogadorResponse save(JogadorRequest jogador){
        Selecao selecao = selecaoRepository.findById(jogador.selecaoId()) // Busca a seleção pelo ID fornecido no request
            .orElseThrow(() -> new EntityNotFoundException("Seleção não encontrada"));

        Jogador j = repository.save(JogadorMapper.toEntity(jogador));
        j.setSelecao(selecao); // Associa o jogador à seleção

        return JogadorMapper.toDTO(j);
    }

    public void update(JogadorRequest jogador, Long id){
        Jogador j = repository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Jogador não encontrado"));

        j.setName(jogador.name());
        j.setNumber(jogador.number());
        j.setPosition(jogador.position());
        j.setAge(jogador.age());
        j.setClub(jogador.club());
        
        Selecao selecao = selecaoRepository.findById(jogador.selecaoId())
                .orElseThrow(() -> new EntityNotFoundException("Seleção não encontrada"));

    j.setSelecao(selecao);
        repository.save(j);

    }

    public void delete(Long id){
        if(repository.existsById(id)){
            repository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Jogador não cadastrado");
        }
    }
}
