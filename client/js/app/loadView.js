class LoadView extends React.Component {
    render(){
        return(
            h('div', {className:'container'}, 
                h(NavMenu, {appState:this.props.appState}),
                h('h1', null, 'Load')
            )
        )
    }
}