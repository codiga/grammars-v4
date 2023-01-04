function App(){
	return (
    <div>
    	<Header children="App Title" />
			<Content children={"Some app content"} />
			{/* this will work */}
			<Content children={
        <div>
	        <p>Some app content</p>        	
        </div>
      } />
    	<Footer color="purple"/>
    </div>
  ) 
}
