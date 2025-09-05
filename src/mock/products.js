
import look1 from "../assets/images/look1.jpg";
import look2 from "../assets/images/look2.jpg";
import look3 from "../assets/images/look3.jpg";
import look1Video from "../assets/videos/look1.mp4";

export const MOCK_PRODUCTS = [
  {
    id: 1,
    type: "image",
    src: look1,
    annotations: [{ x: 50, y: 30, product: { id: 101, name: "Shirt" } }],
  },
  {
    id: 2,
    type: "image",
    src: look2,
    annotations: [{ x: 50, y: 30, product: { id: 101, name: "Shirt" } }],
  },
  {
    id: 3,
    type: "image",
    src: look3,
    annotations: [{ x: 50, y: 30, product: { id: 101, name: "Shirt" } }],
  },
  {
    id: 4,
    type: "video",
    src: look1Video,
    annotations: [],
  },
];