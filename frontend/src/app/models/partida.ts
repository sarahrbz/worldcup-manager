export interface Partida{
    id: number,
    mandanteId: number,
    mandanteName: string,
    visitanteId: number,
    visitanteName: string,
    data: string,
    estadio: string,
    golsMandante: number,
    golsVisitante: number
}