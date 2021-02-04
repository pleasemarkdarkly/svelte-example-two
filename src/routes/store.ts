import { writable } from "./localStore";
export const preferences = writable(
	"preferences",
	{ theme: "dark" },
);

