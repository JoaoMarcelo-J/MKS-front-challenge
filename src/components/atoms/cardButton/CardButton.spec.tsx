import { render } from "@testing-library/react";
import { CardButton } from ".";
import { product } from "./cardButtonMocks";

test("card button renders correctly", () => {
  const { debug } = render(<CardButton product={product} />);

  debug();
});
