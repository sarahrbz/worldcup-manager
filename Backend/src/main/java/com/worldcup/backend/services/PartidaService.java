package com.worldcup.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.worldcup.backend.dtos.PartidaRequest;
import com.worldcup.backend.dtos.PartidaResponse;
import com.worldcup.backend.entities.Partida;
import com.worldcup.backend.entities.Selecao;
import com.worldcup.backend.mappers.PartidaMapper;
import com.worldcup.backend.repositories.PartidaRepository;
import com.worldcup.backend.repositories.SelecaoRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class PartidaService {

    @Autowired
    private PartidaRepository repository;

    @Autowired
    private SelecaoRepository selecaoRepository;

    public List<PartidaResponse> findAll(){
        return repository.findAll()
            .stream()
            .map(PartidaMapper::toDTO)
            .toList();
    }

    public PartidaResponse findById(Long id){
        return repository.findById(id)
            .map(PartidaMapper::toDTO)
            .orElseThrow(() -> new EntityNotFoundException("Partida não encontrada"));
    }

    private void validarSelecoes(PartidaRequest partida) {
        if(partida.mandanteId().equals(partida.visitanteId())){
        throw new IllegalArgumentException(
            "Uma seleção não pode jogar contra ela mesma"
        );
    }
    }

    public PartidaResponse save(PartidaRequest partida){
        validarSelecoes(partida);
        Selecao mandante = selecaoRepository.findById(partida.mandanteId()) // Busca a seleção mandante pelo ID fornecido no request
            .orElseThrow(() -> new EntityNotFoundException("Seleção mandante não encontrada"));

        Selecao visitante = selecaoRepository.findById(partida.visitanteId()) // Busca a seleção visitante pelo ID fornecido no request
            .orElseThrow(() -> new EntityNotFoundException("Seleção visitante não encontrada"));

        Partida p = repository.save(PartidaMapper.toEntity(partida));
        p.setMandante(mandante); // Associa a seleção mandante à partida
        p.setVisitante(visitante); // Associa a seleção visitante à partida
        return PartidaMapper.toDTO(p);
    }

    public void update(PartidaRequest partida, Long id){
        validarSelecoes(partida);
        Partida p = repository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Partida não encontrada"));

        p.setData(partida.data());
        p.setEstadio(partida.estadio());
        p.setGolsMandante(partida.golsMandante());
        p.setGolsVisitante(partida.golsVisitante());
        
        Selecao mandante = selecaoRepository.findById(partida.mandanteId()) // Busca a seleção mandante pelo ID fornecido no request
            .orElseThrow(() -> new EntityNotFoundException("Seleção mandante não encontrada"));

        Selecao visitante = selecaoRepository.findById(partida.visitanteId()) // Busca a seleção visitante pelo ID fornecido no request
            .orElseThrow(() -> new EntityNotFoundException("Seleção visitante não encontrada"));

        p.setMandante(mandante); // Associa a seleção mandante à partida
        p.setVisitante(visitante); // Associa a seleção visitante à partida

        repository.save(p);
    }

    public void delete(Long id){
        if(repository.existsById(id)){
            repository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Partida não cadastrada");
        }
    }
    

}
