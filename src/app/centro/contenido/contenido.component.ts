import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'conte',
  templateUrl: './contenido.component.html',
  styles: [
  ]
})
export class ContenidoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    fontSizePx= 10;

    @Input()  size: number | string = 0;
    @Output() sizeChange = new EventEmitter<number>();

    dec() { this.resize(-1); }
    inc() { this.resize(+1); }

    resize(delta: number) {
      this.size = Math.min(40, Math.max(8, +this.size + delta));
      this.sizeChange.emit(this.size);
      this.fontSizePx = this.size;
    }
  }


