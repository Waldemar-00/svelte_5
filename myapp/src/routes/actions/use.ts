import type { Action } from 'svelte/action';
export const autofocus: Action<HTMLInputElement, boolean> = (node, isAutofocus: boolean = true) => {
	if (isAutofocus) node.focus();
};

export const changeBGC: Action<HTMLDivElement, string> = (node, BGCcolor = 'yellow') => {
	node.style.backgroundColor = BGCcolor;
	return {
		update() {
			node.style.backgroundColor = BGCcolor;
		},
		destroy() {
			node.style.backgroundColor = 'lightblue';
		}
	};
};
