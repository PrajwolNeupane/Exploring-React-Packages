import { FC, useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";


var PictureList = [
    {
        id: 1,
        url: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
    },
    {
        id: 2,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0szgOQjoMtERPPGc94M59ryDj0IJgtUhlmALZEBY&s"
    },
    {
        id: 3,
        url: "https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0"
    }
]

interface Props {

}

let DragDrop: FC<Props> = ({ }) => {

    const [board, setBoard] = useState<any>([
    ]);

    const [pictureList,setPictureList] = useState(PictureList)

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item: { id: number }) => addImage(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addImage = (id: number) => {
        const item = PictureList.find((curr) => curr.id === id);
        if (item) {
          setBoard((prevBoard:any) => [...prevBoard, item]);
          setPictureList((prevList) => prevList.filter((curr) => curr.id !== id));
        }
      };

    return (
        <>
            <div className="Images">
                {
                    pictureList?.map((curr) => {
                        return <Picture url={curr?.url} id={curr?.id} />
                    })
                }
            </div>
            <div className="Board" ref={drop} style={{ height: '250px', border: "5px black solid" }}>
                {
                    board?.map((curr: { url: string, id: number }) => {
                        return <Picture url={curr.url} id={curr.id} />
                    })
                }
            </div>
        </>
    )
}
export default DragDrop;