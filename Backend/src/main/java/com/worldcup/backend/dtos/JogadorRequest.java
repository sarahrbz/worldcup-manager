package com.worldcup.backend.dtos;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record JogadorRequest(
    @NotBlank(message = "O nome do jogador é obrigatório.")
    @Size(min = 5, max = 100, message = "O nome do jogador deve conter entre 5 e 100 caracteres.")  
    String name,
    @NotNull(message = "O número é obrigatório")
    @Min(value = 1, message = "O número deve ser maior que 0")
    @Max(value = 99, message = "O número deve ser menor que 100")
    Integer number,
    @NotBlank(message = "A posição do jogador é obrigatória.") 
    String position, 
    @NotNull(message = "A idade é obrigatória")
    @Min(value = 15, message = "A idade mínima é 15 anos")
    @Max(value = 50, message = "A idade máxima é 50 anos")
    Integer age,
    @NotBlank(message = "O clube do jogador é obrigatório.")
    String club, 
    @NotNull(message = "A seleção é obrigatória")
    Long selecaoId) {
    
}
