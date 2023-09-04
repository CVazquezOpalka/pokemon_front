import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "../components/Navbar";

describe("Navbar components", () => {
  test('deberia renderizar un tag img con una imagen y un alt que diga "logo de la pagina"', () => {
    render(<Navbar />);
    const imgLogo = screen.findByAltText("logo de la pagina");
    expect(imgLogo).toBeInTheDocument()
  });
});
