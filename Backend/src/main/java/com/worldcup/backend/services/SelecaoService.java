package com.worldcup.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.worldcup.backend.entities.Selecao;
import com.worldcup.backend.repositories.SelecaoRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class SelecaoService {
    @Autowired
    private SelecaoRepository repository;

    public List<Selecao> findAll() {
        return repository.findAll();
    }
    
    public Selecao findById(Long id) {
        return repository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Seleção não encontrada com id: " + id));    
    }

    public void deleteById(Long id) {
        if (!repository.existsById(id)) {
            throw new EntityNotFoundException("Seleção não encontrada com id: " + id);
        }
        repository.deleteById(id);
    }

    public Selecao save(Selecao selecao) {
        return repository.save(selecao);
    }

    public void update(Selecao selecao, Long id){
        Selecao s = repository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Seleção não encontrada com id: " + id));
        s.setName(selecao.getName());
        s.setCoach(selecao.getCoach());
        s.setGroup(selecao.getGroup());
        s.setFifaRanking(selecao.getFifaRanking());
        s.setNumberOfTitles(selecao.getNumberOfTitles());
        
        repository.save(s);
    }


}
