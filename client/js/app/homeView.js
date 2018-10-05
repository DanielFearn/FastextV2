// all components only used in the home view

class HomeView extends React.Component {
    render(){
        return(
            h('div', {className:'container'}, 
                h(NavMenu, {appState:this.props.appState}),
                h('h1', null, 'Home')
            )
        )
    }
}