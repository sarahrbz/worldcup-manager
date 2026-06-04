package com.worldcup.backend.mappers;

import com.worldcup.backend.dtos.JogadorRequest;
import com.worldcup.backend.dtos.JogadorResponse;
import com.worldcup.backend.entities.Jogador;
import com.worldcup.backend.entities.Selecao;

public class JogadorMapper {
     public static Jogador toEntity(JogadorRequest request) {
            Jogador j = new Jogador();
            j.setName(request.name());
            j.setNumber(request.number());
            j.setPosition(request.position());
            j.setAge(request.age());
            j.setClub(request.club());

            j.setSelecao(new Selecao()); // Cria uma nova instância/objeto de Selecao
            j.getSelecao().setId(request.selecaoId()); // Define o ID da seleção com base no valor do request
            
            return j;
        }

    public static JogadorResponse toDTO(Jogador jogador) {
        return new JogadorResponse(
            jogador.getId(),
            jogador.getName(),
            jogador.getNumber(),
            jogador.getPosition(),
            jogador.getAge(),
            jogador.getClub(),
            jogador.getSelecao() != null ? jogador.getSelecao().getId() : null,
            jogador.getSelecao() != null ? jogador.getSelecao().getName() : null
        );
    }
    
}
