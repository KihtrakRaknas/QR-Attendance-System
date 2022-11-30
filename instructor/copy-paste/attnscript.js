function markAttn(input, labNumber) {
    let dirIds = JSON.parse(input)
    dirIds = dirIds.map(x => x.id)
    dirIds = [...new Set(dirIds)]
    const gradedCol = 3 - 1 + labNumber
    const possiblePointsRow = document.getElementsByTagName("tbody")[2].children[1]
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
        console.log(`Failed to find ${dirIds.length} people!\n${dirIds}`)
    return dirIds
}