import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'text-field',
  scoped: true,
})
export class TextField {
  @Prop() name: string;
  @Prop() addClass: string;
  @Prop() type: 'email' | 'password' | 'text' | 'search' = 'text';
  @Prop() width: 'full' | 'auto' = 'auto';
  @Prop() placeholder: string = 'something';
  @Prop() onChange: any;
  @Prop() onClick: any;

  render() {
    return (
      <input
        type={this.type}
        class={`appearance-none block  px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm w-${this.width} ${this.addClass} `}
        name={this.name}
        placeholder={`Enter ${this.placeholder}`}
        required
        onChange={this.onChange}
        onClick={this.onClick}
      />
    );
  }
}
