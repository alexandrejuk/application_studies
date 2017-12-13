import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moto-boy',
  templateUrl: './moto-boy.component.html',
  styleUrls: ['./moto-boy.component.css']
})
export class MotoBoyComponent implements OnInit {

  clientesConcluido = [
    { name: 'Farmacia e Drograria', status: 'concluido', distancia: '12km', horario: '10h - 11h', concluida_em: '1h atras'},
    { name: 'Clinica Medica', status: 'concluido', distancia: '10km', horario: '14h - 16h', concluida_em: '2h atras' },
    { name: 'Contabilidade do Povo', status: 'concluido', distancia: '2km', horario: '20h - 21h', concluida_em: '6h atras'  },
  ];
  horarios = [
    { hr: '08h - 09h', status: 'disponivel' },
    { hr: '09h - 10h', status: 'disponivel' },
    { hr: '10h - 11h', status: 'reservado' },
    { hr: '13h - 14h', status: 'reservado' },
    { hr: '16h - 17h', status: 'disponivel' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
