package com.worldcup.backend.dtos;

public record JogadorRequest(String name, Integer number, String position, Integer age, String club, Long selecaoId) {
    
}
