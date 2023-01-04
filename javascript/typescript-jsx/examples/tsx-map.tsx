class SummaryContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
subject: 'Summary Container!!'
        };
    }

    render() {
        things.map((thing, index) => (
                    <Hello key={index} />
                    ));
    }
}
