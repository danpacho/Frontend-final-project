import { Container } from "../../common/Container"
import { ColorToolBar } from "./ColorToolBar"
import { FontToolBar } from "./FontToolBar"
import { ShapeToolBar } from "./ShapeToolBar"
import { StickerToolBar } from "./Stickers/StickerToolBar"

const EditorToolBar = ({ selectedOption }) => {
    const isActive = selectedOption !== "none"
    return (
        <Container
            className={`flex items-center justify-center h-16 max-h-[4rem] z-50 ${
                isActive
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-0 translate-y-4 pointer-events-none"
            } absolute bottom-2 left-1/2 -translate-x-1/2 transition-all duration-300`}
        >
            {selectedOption === "color" && <ColorToolBar />}
            {selectedOption === "font" && <FontToolBar />}
            {selectedOption === "sticker" && <StickerToolBar />}
            {selectedOption === "type" && <ShapeToolBar />}
        </Container>
    )
}

export { EditorToolBar }
