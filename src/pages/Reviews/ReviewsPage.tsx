import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
} from '@mui/material'
import Title from 'components/Title/Title'
import { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}

const ReviewsPage = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Евгеній',
            text: 'Навіть не знаю, щр написати. Телефон як телефон. Не був моєю мрією ніколи)) Перейшов з Huawei P20 якому вдже 5-й рік ішов. Перший ифон. Ніякого вау ефекта не викликав. Сподобалась батарея. В моїх режимах використання тримає майже 3 дні',
        },
        {
            name: 'Юрій',
            text: 'Це просто вау) як завжди розетка на висоті по доставці та обслуговуванню Змінювала с 11 про мах і є різниця в самому розмірі та в розмірах камери ( вони величезні)',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)

    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are requaired!')
        } else {
            setReviews((prevState) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }
    return (
        <>
            <Title>Reviews</Title>
            {reviews.map(({ name, text }, i) => (
                <Card sx={{ margin: '30px 0' }} key={i} variant="outlined">
                    <CardContent>
                        <div>{name}:</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}

            <form onSubmit={onSend}>
                <h3>Please leave a review</h3>
                <div>
                    <TextField
                        size="small"
                        placeholder="Your name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Your massage"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button type="submit" variant="outlined">
                    Send
                </Button>
            </form>
        </>
    )
}
export default ReviewsPage
