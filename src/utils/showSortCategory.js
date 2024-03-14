export function showSortCategory(sortByCategory){
    let sortedByText = "sorted by"
    let category = ''

    switch(sortByCategory){
        case "created_at":
            category = "date";
            break;
        case "votes":
            category = "number of votes";
            break;
        case "comment_count":
            category = "number of comments"
    }

    if(sortByCategory){
        return `${sortedByText} ${category}`
    }
}