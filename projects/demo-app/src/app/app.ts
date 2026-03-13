import { Component } from '@angular/core';
import { LoaderComponent, LoaderType } from 'ngx-loader-ui';

interface LoaderDemo {
  type: LoaderType;
  label: string;
  color: string;
}

@Component({
  selector: 'app-root',
  imports: [LoaderComponent],
  template: `
    <div class="page">
      <header>
        <h1>ngx-loader-ui</h1>
        <p>30 animated loader variants for Angular 17+</p>
      </header>

      <section class="grid">
        @for (loader of loaders; track loader.type) {
          <div class="card">
            <span class="card-type">{{ loader.type }}</span>
            <div class="loader-area">
              <ngx-loader [type]="loader.type" [color]="loader.color" size="md" />
            </div>
            <span class="card-label">{{ loader.label }}</span>
          </div>
        }
      </section>

      <section class="size-section">
        <h2>Size Variants</h2>
        <div class="size-row">
          <div class="card">
            <ngx-loader type="spinner" color="#1976d2" size="sm" />
            <span class="card-label">sm</span>
          </div>
          <div class="card">
            <ngx-loader type="spinner" color="#1976d2" size="md" />
            <span class="card-label">md</span>
          </div>
          <div class="card">
            <ngx-loader type="spinner" color="#1976d2" size="lg" />
            <span class="card-label">lg</span>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    :host { display: block; }

    .page {
      min-height: 100vh;
      background: #0f1117;
      font-family: 'Segoe UI', system-ui, sans-serif;
      color: #e2e8f0;
      padding: 48px 24px 64px;
    }

    header {
      text-align: center;
      margin-bottom: 48px;
    }
    header h1 {
      font-size: 2rem; font-weight: 700;
      background: linear-gradient(135deg, #60a5fa, #a78bfa);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text; margin-bottom: 8px;
    }
    header p { color: #64748b; font-size: 0.9rem; }

    .grid {
      display: flex; flex-wrap: wrap; gap: 24px;
      justify-content: center; max-width: 1200px; margin: 0 auto;
    }

    .card {
      background: #1e293b; border: 1px solid #334155; border-radius: 16px;
      padding: 36px 28px 22px; display: flex; flex-direction: column;
      align-items: center; gap: 18px; min-width: 130px;
      position: relative; transition: transform 0.2s, box-shadow 0.2s;
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0,0,0,.5);
    }

    .card-type {
      position: absolute; top: 8px; right: 10px;
      font-size: 0.6rem; color: #475569; font-family: monospace;
    }

    .card-label {
      font-size: 0.78rem; color: #94a3b8;
      text-transform: capitalize; letter-spacing: 0.04em;
    }

    .loader-area {
      display: flex; align-items: center; justify-content: center;
      height: 60px;
    }

    .size-section {
      max-width: 1200px; margin: 48px auto 0; text-align: center;
    }
    .size-section h2 {
      font-size: 0.7rem; text-transform: uppercase;
      letter-spacing: 0.12em; color: #475569; margin-bottom: 20px;
    }
    .size-row {
      display: flex; gap: 24px; justify-content: center;
    }
  `]
})
export class App {
  loaders: LoaderDemo[] = [
    { type: 'spinner',     label: 'Spinner',     color: '#1976d2' },
    { type: 'dots',        label: 'Dots',        color: '#9c27b0' },
    { type: 'bars',        label: 'Bars',        color: '#00bcd4' },
    { type: 'pulse',       label: 'Pulse',       color: '#ff5722' },
    { type: 'skeleton',    label: 'Skeleton',    color: '#64748b' },
    { type: 'ripple',      label: 'Ripple',      color: '#43a047' },
    { type: 'bounce',      label: 'Bounce',      color: '#f59e0b' },
    { type: 'ring',        label: 'Ring',        color: '#e91e63' },
    { type: 'wave',        label: 'Wave',        color: '#26c6da' },
    { type: 'flip',        label: 'Flip',        color: '#ab47bc' },
    { type: 'orbit',       label: 'Orbit',       color: '#ff7043' },
    { type: 'typing',      label: 'Typing',      color: '#7c4dff' },
    { type: 'grid',        label: 'Grid',        color: '#66bb6a' },
    { type: 'clock',       label: 'Clock',       color: '#ffa726' },
    { type: 'progress',    label: 'Progress',    color: '#ef5350' },
    { type: 'hourglass',   label: 'Hourglass',   color: '#ec407a' },
    { type: 'square-spin', label: 'Square Spin', color: '#5c6bc0' },
    { type: 'windmill',    label: 'Windmill',    color: '#26a69a' },
    { type: 'helix',       label: 'Helix',       color: '#42a5f5' },
    { type: 'radar',       label: 'Radar',       color: '#29b6f6' },
    { type: 'morphing',    label: 'Morphing',    color: '#8d6e63' },
    { type: 'diamond',     label: 'Diamond',     color: '#ffca28' },
    { type: 'dna',         label: 'DNA',         color: '#66bb6a' },
    { type: 'gauge',       label: 'Gauge',       color: '#ff8a65' },
    { type: 'pendulum',    label: 'Pendulum',    color: '#ba68c8' },
    { type: 'chase',       label: 'Chase',       color: '#4dd0e1' },
    { type: 'heartbeat',   label: 'Heartbeat',   color: '#e53935' },
    { type: 'infinity',    label: 'Infinity',    color: '#7e57c2' },
    { type: 'zigzag',      label: 'Zigzag',      color: '#ffa000' },
    { type: 'staircase',   label: 'Staircase',   color: '#0097a7' },
  ];
}
