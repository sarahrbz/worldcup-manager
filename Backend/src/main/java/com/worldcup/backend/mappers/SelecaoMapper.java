package com.worldcup.backend.mappers;

import com.worldcup.backend.dtos.SelecaoRequest;
import com.worldcup.backend.dtos.SelecaoResponse;
import com.worldcup.backend.entities.Selecao;

public class SelecaoMapper {
    public static Selecao toEntity(SelecaoRequest request) {
        Selecao s = new Selecao();
        s.setName(request.name());
        s.setCoach(request.coach());
        s.setGroup(request.group());
        s.setFifaRanking(request.fifaRanking());
        s.setNumberOfTitles(request.numberOfTitles());
        return s;
    }

    public static SelecaoResponse toDTO(Selecao selecao) {
        return new SelecaoResponse(
            selecao.getId(),
            selecao.getName(),
            selecao.getCoach(),
            selecao.getGroup(),
            selecao.getFifaRanking(),
            selecao.getNumberOfTitles()
        );
    }
}
