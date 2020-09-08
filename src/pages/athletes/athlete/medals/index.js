export default function createMedals(data) {
    const medals = {
        gold: 0,
        silver: 0,
        bronze: 0
    }

    for (let key in data) {
        data[key].value.forEach(element =>
            element.value.forEach(achivement => {
                if (achivement.rank == 1) {
                    medals.gold++
                } else if (achivement.rank == 2) {
                    medals.silver++
                } else if (achivement.rank == 3) {
                    medals.bronze++
                }
            }
            ))
    }

    return medals
}