import { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <button
        id="btn"
        className="w-full h-[3.5rem] bg-secondary hover:bg-[#77E2B3] rounded-[0.3125rem] mt-4 flex items-center justify-center py-[0.94px] text-[0.9375rem] font-semibold leading-relaxed	tracking-[0.0625rem] text-white select-none"
      >
        CLAIM YOUR FREE TRIAL
      </button>
    );
  }
}
