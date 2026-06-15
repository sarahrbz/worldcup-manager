package com.worldcup.backend.entities;

import java.io.Serializable;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name= "TBL_PARTIDAS")
public class Partida implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Selecao mandante;
    @ManyToOne
    private Selecao visitante;
    private LocalDate data;
    private String estadio;
    private Integer golsMandante;
    private Integer golsVisitante;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Selecao getMandante() {
        return mandante;
    }
    public void setMandante(Selecao mandante) {
        this.mandante = mandante;
    }
    public Selecao getVisitante() {
        return visitante;
    }
    public void setVisitante(Selecao visitante) {
        this.visitante = visitante;
    }
    public LocalDate getData() {
        return data;
    }
    public void setData(LocalDate data) {
        this.data = data;
    }
    public String getEstadio() {
        return estadio;
    }
    public void setEstadio(String estadio) {
        this.estadio = estadio;
    }
    public Integer getGolsMandante() {
        return golsMandante;
    }
    public void setGolsMandante(Integer golsMandante) {
        this.golsMandante = golsMandante;
    }
    public Integer getGolsVisitante() {
        return golsVisitante;
    }
    public void setGolsVisitante(Integer golsVisitante) {
        this.golsVisitante = golsVisitante;
    }
    
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Partida other = (Partida) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

    
}
