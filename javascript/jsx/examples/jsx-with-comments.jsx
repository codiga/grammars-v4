// Layout.jsx

export { Header, Content, Footer }

// App.jsx
import * as Layout from "./Layout";

return (
    <div>
    {/*
              These components don't return any .[naming] info
              and they are missing the props
              */}
    <Layout.Header user='Daniel' />
    <Layout.Content color='purple' />
    <Layout.Footer />
    </div>
)

// look at the 5th and 6th console results
