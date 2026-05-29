package com.worldcup.backend.dtos;

public record SelecaoRequest(Long id, String name, String coach, String group, Integer fifaRanking, Integer numberOfTitles) {
    
}
