import { Component, h } from '@stencil/core';

@Component({
  tag: 'animated-button',
  styleUrl: 'animated-button.css',
  shadow: true,
})
export class AnimatedButton {
  render() {
    return <button>
      <slot/>
    </button>;
  }
}
