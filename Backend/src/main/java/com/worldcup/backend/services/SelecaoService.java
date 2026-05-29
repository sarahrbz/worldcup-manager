package com.worldcup.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.worldcup.backend.dtos.SelecaoRequest;
import com.worldcup.backend.dtos.SelecaoResponse;
import com.worldcup.backend.entities.Selecao;
import com.worldcup.backend.mappers.SelecaoMapper;
import com.worldcup.backend.repositories.SelecaoRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class SelecaoService {
    @Autowired
    private SelecaoRepository repository;

    public List<SelecaoResponse> findAll() {
        return repository.findAll()
            .stream()
            .map(SelecaoMapper::toDTO)
            .toList();
    }
    
    public SelecaoResponse findById(Long id) {
        return repository.findById(id)
            .map(SelecaoMapper::toDTO)
            .orElseThrow(() -> new EntityNotFoundException("Seleção não encontrada com id: " + id));    
    }

    public void deleteById(Long id) {
        if (!repository.existsById(id)) {
            throw new EntityNotFoundException("Seleção não encontrada com id: " + id);
        }
        repository.deleteById(id);
    }

    public SelecaoResponse save(SelecaoRequest selecao) {
        Selecao s = repository.save(SelecaoMapper.toEntity(selecao));
        return SelecaoMapper.toDTO(s);
    }

    public void update(SelecaoRequest selecao, Long id){
        Selecao s = repository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Seleção não encontrada com id: " + id));
        s.setName(selecao.name());
        s.setCoach(selecao.coach());
        s.setGroup(selecao.group());
        s.setFifaRanking(selecao.fifaRanking());
        s.setNumberOfTitles(selecao.numberOfTitles());
        
        repository.save(s);
    }


}
