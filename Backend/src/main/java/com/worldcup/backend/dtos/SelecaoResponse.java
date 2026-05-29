package com.worldcup.backend.dtos;

public record SelecaoResponse(Long id, String name, String coach, String group, Integer fifaRanking, Integer numberOfTitles) {
    
}
