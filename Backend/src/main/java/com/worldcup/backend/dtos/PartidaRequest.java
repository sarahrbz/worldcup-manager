package com.worldcup.backend.dtos;

import java.time.LocalDate;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record PartidaRequest(
    @NotNull
    Long mandanteId,
    @NotNull
    Long visitanteId,
    @NotNull
    LocalDate data,
    @NotBlank(message = "O estádio é obrigatório")
    @Size(min = 3, max = 100, message = "O estádio deve conter entre 3 e 100 caracteres")
    String estadio,
    @Min(value = 0, message = "Os gols do mandante devem ser maiores ou iguais a zero")
    Integer golsMandante,
    @Min(value = 0, message = "Os gols do visitante devem ser maiores ou iguais a zero")
    Integer golsVisitante) {
    
}
