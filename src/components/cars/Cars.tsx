type CarsPropsType = {
    topCars: TopCarsType[]
}

type TopCarsType = {
    manufacturer: string
    model: string
}

export const Cars = (props: CarsPropsType) => {


    return (
        <table>

            <thead>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>

            <tbody>
            {props.topCars.map((car, index) => {
                return (<tr key={index}>
                        <td>
                            {car.manufacturer}</td>
                        <td>{car.model}</td>
                    </tr>
                )
            })}
            </tbody>

        </table>
    )
}

