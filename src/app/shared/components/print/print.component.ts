import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-print',
  imports: [CommonModule],
  templateUrl: './print.component.html',
  styleUrl: './print.component.scss'
})
export class PrintComponent {
  @Input() company!: any;
  @Input() customer!: any;
  @Input() invoice!: any;
  @Input() items: any[] = [];
  @Input() tax!: any;
  @Input() bank!: any;

  ngOnInit(): void {
    console.log('company', this.items)
  }
}
