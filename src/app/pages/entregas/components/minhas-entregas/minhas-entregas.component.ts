import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minhas-entregas',
  templateUrl: './minhas-entregas.component.html',
  styleUrls: ['./minhas-entregas.component.css']
})
export class MinhasEntregasComponent implements OnInit {

  clientesConcluido = [
    {
      id: 1,
      name:
        'Farmacia e Drograriamacia e Drograriamacia e Drograriamacia e Drograria',
      status: 'concluido',
      distancia: '1102km',
      horario: '10h - 11h',
      concluida_em: '1h',
      endereco:
        'Rua Chico Mendes N° 14, Centro Sâo Bernardo do Campo - 09784800'
    },
    {
      id: 2,
      name: 'Clinica Medica',
      status: 'concluido',
      distancia: '10km',
      horario: '14h - 16h',
      concluida_em: '2h',
      endereco:
        'Rua Chico Mendes N° 14, Centro Sâo Bernardo do Campo - 09784800'
    },
    {
      id: 3,
      name: 'Contabilidade do Povo',
      status: 'concluido',
      distancia: '2km',
      horario: '20h - 21h',
      concluida_em: '6h',
      endereco:
        'Rua Chico Mendes soares de alburquerque medeiros silva junior exagerado  N° 14, Centro Sâo Bernardo do Campo - 09784800'
    },
    {
      id: 4,
      name:
        'Farmacia e Drograriamacia e Drograriamacia e Drograriamacia e Drograria',
      status: 'concluido',
      distancia: '1102km',
      horario: '10h - 11h',
      concluida_em: '1h',
      endereco:
        'Rua Chico Mendes N° 14, Centro Sâo Bernardo do Campo - 09784800'
    },
    {
      id: 5,
      name: 'Clinica Medica',
      status: 'concluido',
      distancia: '10km',
      horario: '14h - 16h',
      concluida_em: '2h',
      endereco:
        'Rua Chico Mendes N° 14, Centro Sâo Bernardo do Campo - 09784800'
    },
    {
      id: 6,
      name: 'Contabilidade do Povo',
      status: 'concluido',
      distancia: '2km',
      horario: '20h - 21h',
      concluida_em: '6h',
      endereco:
        'Rua Chico Mendes soares de alburquerque medeiros silva junior exagerado  N° 14, Centro Sâo Bernardo do Campo - 09784800'
    }
  ];

  delivery = {
    id: 1,
    name: 'Farmacia e Drograriamacia e Drograriamacia e Drograriamacia e Drograria',
    status: 'concluido',
    distancia: '100km',
    horario: '10h - 11h',
    concluida_em: '1h',
    endereco_entrega: 'Rua Chico Mendesua Chico Mendes soares de alburquerque medeiros silva junior exagerado N° 14, Centro Sâo Bernardo do Campo - 09784800',
    tipo: 'Uma Caixa',
    prioridade: 'Alta',
    solicitante_retirada: 'Alexandre',
    solicitante_entrega: 'João Paulo',
    valor_entrega: 15.59,
    valor_retirada: 12.05,
    observacao: 'Cuidado conteudo da caixa frágil',
    retirada: true,
    frete: 'Ida e Volta',
    endereco_retirada:
      'Rua Resende,ua Chico Mendes soares de alburquerque medeiros silva junior exagerado 4, Vila Sao Pedro'
  };

  constructor() { }

  ngOnInit() {
  }

}
