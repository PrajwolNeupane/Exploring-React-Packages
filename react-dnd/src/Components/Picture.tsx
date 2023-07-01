import { FC } from "react";
import { useDrag } from "react-dnd";

interface Props {
    url: string,
    id: number
}

let Picture: FC<Props> = ({ url, id }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    return (
        <img src={url} width={'200px'} ref={drag} style={{ border: isDragging ? "5px black solid" : "none" }} />

    )
}

export default Picture;