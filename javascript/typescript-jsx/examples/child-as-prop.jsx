function App(){
	return (
    <div>
    	<Header children="App Title" />
			<Content children={"Some app content"} />
			{/* this won't work */}
			<Content children={<p>Some app content</p>} />
    	<Footer color="purple"/>
    </div>
  ) 
}
