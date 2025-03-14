/**
 * Étend les assertions avec jest-dom.
 * La version ^5.16.5 a été utilisée pour résoudre un problème de compatibilité avec Vitest.
 */
import "@testing-library/jest-dom";

import { afterAll, afterEach, beforeAll, vi } from "vitest";
import { server } from "./mock/server";

// Si vous utilisez des APIs ou des services externes à mocker, vous pouvez les faire ici.
// Exemple : Mock d'une fonction globale

vi.stubGlobal("fetch", () =>
  Promise.resolve({
    json: () => Promise.resolve({ message: "Hello World" }),
  })
);

const useAuth = vi.fn(() => ({
  isAuthenticated: false,
  user: null,
  logout: () => {},
  login: () => {},
}));
// useAuth
vi.stubGlobal("useAuth", useAuth);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Si vous utilisez des modules de styles CSS, vous pouvez les ignorer ici pour éviter des erreurs
// Exemple de mock de fichiers CSS ou autres assets (comme des images ou fichiers JSON)
vi.mock("*.css", () => ({} as object));
vi.mock("*.png", () => ({} as object));
