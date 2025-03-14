import { handlers } from "./handlers";
import { setupServer } from "msw/node";

// Si vous utilisez des APIs ou des services externes à mocker, vous pouvez les faire ici.
// Exemple : Mock d'une fonction globale
export const server = setupServer(...handlers);
