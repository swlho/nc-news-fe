import { useState } from "react"

const SortBy = (props) =>{
    const {setSortByCategory, setOrderBy } = props
    const [radioHidden, setRadioHidden] = useState("none")

    const handleChange = ({target}) =>{
        setSortByCategory(target.value)
        setRadioHidden("initial")
    }

    const handleOrderChange=({target})=>{
        setOrderBy(target.value)
    }

return (
	<>
		<form id="sort-by" onChange={handleChange}>
			<label htmlFor="sort-category">Sort by:</label>
			<select name="sort-category" id="sort" defaultValue="Select">
				<option value="Select" disabled>Select...</option>
				<option value="created_at">Date</option>
				<option value="comment_count">Comment count</option>
				<option value="votes">Vote count</option>
			</select>
		</form>

		<fieldset style={{display:radioHidden}}>
			<legend>Order by:</legend>
			<div>
				<input
					type="radio"
					id="ascending"
					value="asc"
					name="order"
					onClick={handleOrderChange}
                    readOnly
				/>
				<label htmlFor="ascending">Ascending</label>
			</div>
			<div>
				<input
					type="radio"
					id="descending"
					value="desc"
					name="order"
					onClick={handleOrderChange}
                    readOnly
				/>
				<label htmlFor="descending">Descending</label>
			</div>
		</fieldset>
	</>
);
}

export default SortBy