'use client';

import { playSound, playComboSound } from '@/lib/audio/sounds';
import { hapticCorrect, hapticWrong, hapticCombo, hapticCelebration } from '@/lib/haptics/haptics';

// Screen shake effect
export function triggerScreenShake(intensity: 'light' | 'medium' | 'heavy' = 'medium') {
  const main = document.querySelector('main');
  if (!main) return;

  const className = 'screen-shake';
  main.classList.add(className);

  // Duration based on intensity
  const duration = intensity === 'light' ? 200 : intensity === 'medium' ? 300 : 400;

  setTimeout(() => {
    main.classList.remove(className);
  }, duration);
}

// Confetti burst effect
export function triggerConfetti(count: number = 30, origin?: { x: number; y: number }) {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);

  const colors = ['#8b5cf6', '#ec4899', '#06b6d4', '#22c55e', '#eab308', '#f97316'];
  const shapes = ['circle', 'square', 'triangle'];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';

    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];

    // Random position
    const x = origin?.x ?? window.innerWidth / 2;
    const y = origin?.y ?? window.innerHeight / 2;
    const offsetX = (Math.random() - 0.5) * 200;
    const offsetY = (Math.random() - 0.5) * 100;

    piece.style.left = `${x + offsetX}px`;
    piece.style.top = `${y + offsetY}px`;
    piece.style.backgroundColor = color;
    piece.style.animationDelay = `${Math.random() * 0.3}s`;
    piece.style.animationDuration = `${2 + Math.random()}s`;

    // Random rotation
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    // Shape styling
    if (shape === 'circle') {
      piece.style.borderRadius = '50%';
    } else if (shape === 'triangle') {
      piece.style.width = '0';
      piece.style.height = '0';
      piece.style.backgroundColor = 'transparent';
      piece.style.borderLeft = '6px solid transparent';
      piece.style.borderRight = '6px solid transparent';
      piece.style.borderBottom = `12px solid ${color}`;
    }

    container.appendChild(piece);
  }

  // Clean up after animation
  setTimeout(() => {
    container.remove();
  }, 3500);
}

// Star burst effect at a point
export function triggerStarBurst(x: number, y: number, count: number = 8) {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = `${x}px`;
  container.style.top = `${y}px`;
  container.style.pointerEvents = 'none';
  container.style.zIndex = '100';
  document.body.appendChild(container);

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    const angle = (i / count) * Math.PI * 2;
    const distance = 50 + Math.random() * 30;

    star.style.position = 'absolute';
    star.style.width = '8px';
    star.style.height = '8px';
    star.style.backgroundColor = '#eab308';
    star.style.borderRadius = '50%';
    star.style.boxShadow = '0 0 10px #eab308';
    star.style.animation = 'star-burst 0.6s ease-out forwards';
    star.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
    star.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);

    container.appendChild(star);
  }

  setTimeout(() => container.remove(), 700);
}

// Full juice package for correct answer
export function juiceCorrectAnswer(comboCount: number = 1) {
  playSound('correct');
  hapticCorrect();

  if (comboCount > 1) {
    playComboSound(comboCount);
    hapticCombo(comboCount);
  }

  // Visual feedback handled by CSS classes
}

// Full juice package for wrong answer
export function juiceWrongAnswer() {
  playSound('wrong');
  hapticWrong();
  triggerScreenShake('light');
}

// Full juice package for level up / milestone
export function juiceCelebration(type: 'levelUp' | 'streakMilestone' | 'bossDefeat') {
  playSound(type);
  hapticCelebration();
  triggerConfetti(50);
  triggerScreenShake('medium');
}

// Floating XP gain animation
export function showXPGain(amount: number, x: number, y: number) {
  const element = document.createElement('div');
  element.className = 'xp-gain';
  element.textContent = `+${amount} XP`;
  element.style.position = 'fixed';
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
  element.style.fontSize = '1.25rem';
  element.style.zIndex = '100';

  document.body.appendChild(element);

  setTimeout(() => element.remove(), 1500);
}

// Pulse effect on element
export function pulseElement(element: HTMLElement) {
  element.style.animation = 'none';
  element.offsetHeight; // Trigger reflow
  element.style.animation = 'combo-pop 0.3s ease-out';
}
