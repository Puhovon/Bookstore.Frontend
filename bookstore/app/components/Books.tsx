import { Button, Card } from "antd";
import { CardTitle } from "./CardTitle";

interface Props {
    books: Book[];
    handleDelete: (id: string) => void;
    handleOpen: (book: Book) => void;
}

export const Books = ({ books, handleDelete, handleOpen }: Props) => {
    return (
        <div className="cards">
            {books.map((book: Book) => (<Card
                key={book.id}
                title={<CardTitle title={book.title} price={book.price} />}
                bordered={false}
            >
                <p>{book.description}</p>
                <div className="card_buttons">
                    <Button
                        onClick={() => handleOpen(book)}
                        style={{ flex: 1 }}
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={() => handleDelete(book.id)}
                        style={{ flex: 1 }}
                        danger
                    >
                        Delete
                    </Button>
                </div>
            </Card>
            ))}
        </div>
    )
}