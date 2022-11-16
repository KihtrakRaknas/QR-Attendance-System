function markAttn(input, labNumber) {
    let dirIds = input.split("\n")
    const gradedCol = 17 + labNumber
    const possiblePointsRow = document.getElementsByTagName("tbody")[2].children[2]
    const possiblePoints = possiblePointsRow.children[gradedCol - 2].innerText
    for (let row of document.getElementsByTagName("tbody")[2].children) {
        const cols = row.children
        const dirID = cols[2].innerText
        if (dirIds.includes(dirID)) {
            cols[gradedCol].children[0].value = possiblePoints
            dirIds = dirIds.filter(el => el != dirID)
        }
    }
    if (dirIds.length == 0)
        console.log(`Success, everyone was given credit!`)
    else
        console.log(`Failed to find ${dirIds.length} people!`)
    return dirIds
}