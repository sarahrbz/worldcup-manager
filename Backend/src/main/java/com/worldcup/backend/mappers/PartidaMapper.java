package com.worldcup.backend.mappers;

import com.worldcup.backend.dtos.PartidaRequest;
import com.worldcup.backend.dtos.PartidaResponse;
import com.worldcup.backend.entities.Partida;
import com.worldcup.backend.entities.Selecao;

public class PartidaMapper {
    public static Partida toEntity(PartidaRequest request){
        Partida p = new Partida();
        p.setMandante(new Selecao());
        p.getMandante().setId(request.mandanteId());
        p.setVisitante(new Selecao());
        p.getVisitante().setId(request.visitanteId());
        p.setData(request.data());
        p.setEstadio(request.estadio());
        p.setGolsMandante(request.golsMandante());
        p.setGolsVisitante(request.golsVisitante());
        return p;
    }

    public static PartidaResponse toDTO(Partida partida) {
        return new PartidaResponse(
            partida.getId(),
            partida.getMandante() != null ? partida.getMandante().getName() : null,
            partida.getVisitante() != null ? partida.getVisitante().getName() : null,
            partida.getMandante() != null ? partida.getMandante().getId() : null,
            partida.getVisitante() != null ? partida.getVisitante().getId() : null,
            partida.getData(),
            partida.getEstadio(),
            partida.getGolsMandante(),
            partida.getGolsVisitante()
        );
    }
    
}
