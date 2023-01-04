const ComponentOne = ({ elements }) => {
  return (
 		<div>
 			{elements || <List elements={elements} />}
 		</div>
 	)
 }

 const ComponentTwo = ({ elements }) => {
   return (
 		<div>
 			{!!elements && <List elements={elements} />}
 		</div>
 	)
 }

const ComponentThree = ({ elements }) => {
  return (
		<div>
			{elements 
				? <List elements={elements} /> 
				: <EmptyList />}
		</div>
	)
}
