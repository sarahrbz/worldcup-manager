package com.worldcup.backend.dtos;

import java.time.LocalDate;

public record PartidaResponse(
    Long id,
    String mandanteName,
    String visitanteName,
    Long mandanteId,
    Long visitanteId,
    LocalDate data,
    String estadio,
    Integer golsMandante,
    Integer golsVisitante
) {
    
}
