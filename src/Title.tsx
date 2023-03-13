interface TitleProps {
    title: string
    year: number
}

const Title = (props: TitleProps) => {
    console.log(props)
    return (
        <h1>
            Hello {props.title}, Year: {props.year}
        </h1>
    )
}

export default Title
