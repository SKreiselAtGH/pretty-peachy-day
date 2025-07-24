import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-glass-card',
  standalone: false,
  templateUrl: './glass-card.html',
  styleUrl: './glass-card.css'
})
export class GlassCard implements OnInit{
  @Input() title?: string;
  @Input() subTitle?: string;
  @Input() body?: string;
  @Input() footer?: string;
  ngOnInit(): void {
    
  }
}
