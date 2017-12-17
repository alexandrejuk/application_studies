import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moto-boy',
  templateUrl: './moto-boy.component.html',
  styleUrls: ['./moto-boy.component.css']
})
export class MotoBoyComponent implements OnInit {
  clientesConcluido = [
    {
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
      name: 'Clinica Medica',
      status: 'concluido',
      distancia: '10km',
      horario: '14h - 16h',
      concluida_em: '2h',
      endereco:
        'Rua Chico Mendes N° 14, Centro Sâo Bernardo do Campo - 09784800'
    },
    {
      name: 'Contabilidade do Povo',
      status: 'concluido',
      distancia: '2km',
      horario: '20h - 21h',
      concluida_em: '6h',
      endereco:
        'Rua Chico Mendes soares de alburquerque medeiros silva junior exagerado  N° 14, Centro Sâo Bernardo do Campo - 09784800'
    }
  ];
  horarios = [
    { hora: '24h - 01h', status: 'reservado' },
    { hora: '02h - 03h', status: 'reservado' },
    { hora: '04h - 05h', status: 'reservado' },
    { hora: '06h - 07h', status: 'disponivel' },
    { hora: '08h - 09h', status: 'disponivel' },
    { hora: '10h - 11h', status: 'reservado' },
    { hora: '12h - 13h', status: 'reservado' },
    { hora: '14h - 15h', status: 'disponivel' },
    { hora: '16h - 17h', status: 'disponivel' },
    { hora: '18h - 19h', status: 'disponivel' },
    { hora: '20h - 21h', status: 'reservado' },
    { hora: '22h - 23h', status: 'reservado' }
  ];
  user = {
    id: 1,
    name: 'Samuel Teixeira',
    vote_average: 4.5,
    vote_count: 4554,
    total_delivery: 945,
    total_delivery_hours: 4445
  };
  delivery = {
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

  entrega = {
    nome: 'Alef de almeida',
    telefone: '11 43392359',
    entregas: [
      {
        name: 'Surita',
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
      },
      {
        name: 'Imperio',
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
        frete: 'Ida',
        endereco_retirada:
          'Rua Resende,ua Chico Mendes soares de alburquerque medeiros silva junior exagerado 4, Vila Sao Pedro'
      },
      {
        name: 'Farmacia',
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
      }
    ]
  }
  constructor() {}

  ngOnInit() {}
}
