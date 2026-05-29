package com.worldcup.backend.dtos;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record SelecaoRequest(
    @NotBlank(message = "O nome da seleção é obrigatório.")
    @Size(min = 3, max = 50, message = "O nome da seleção deve conter entre 3 e 50 caracteres.")
    String name, 
    @NotBlank(message = "O nome do técnico é obrigatório.")
    @Size(min = 3, max = 100, message = "O nome do técnico deve conter entre 3 e 100 caracteres.")
    String coach, 
    @NotBlank(message = "O grupo da seleção é obrigatório.")
    @Size(min = 1, max = 1, message = "O grupo da seleção deve conter exatamente 1 caractere (A, B, C, etc.).")
    String group,
    @Min(value = 1, message = "O ranking da FIFA deve ser um número maior que 0.") 
    Integer fifaRanking,
    @Min(value = 0, message = "O número de títulos deve ser um número igual ou maior que 0.") 
    Integer numberOfTitles) {
    
}
