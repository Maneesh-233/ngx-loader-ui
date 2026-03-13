import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type LoaderType =
  | 'spinner'
  | 'dots'
  | 'bars'
  | 'pulse'
  | 'skeleton'
  | 'ripple'
  | 'bounce'
  | 'ring'
  | 'wave'
  | 'flip'
  | 'orbit'
  | 'typing'
  | 'grid'
  | 'clock'
  | 'progress'
  | 'hourglass'
  | 'square-spin'
  | 'windmill'
  | 'helix'
  | 'radar'
  | 'morphing'
  | 'diamond'
  | 'dna'
  | 'gauge'
  | 'pendulum'
  | 'chase'
  | 'heartbeat'
  | 'infinity'
  | 'zigzag'
  | 'staircase';

export type LoaderSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ngx-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  @Input() type: LoaderType = 'spinner';
  @Input() color: string = '#1976d2';
  @Input() size: LoaderSize = 'md';
}