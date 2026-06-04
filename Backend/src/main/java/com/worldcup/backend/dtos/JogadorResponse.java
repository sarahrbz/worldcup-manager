package com.worldcup.backend.dtos;

public record JogadorResponse(Long id, String name, Integer number, String position, Integer age, String club, Long selecaoId, String selecaoName) {
    
}
