// this file contains components that are reused in multiple views

var h = React.createElement;

class App extends React.Component {

    constructor(){
        super();
        this.state = {view: 'home'}

    }

    componentWillMount(){
        this.loadStateFromStorage();
    }

    // calls setState with callback
    updateState(newState){
        this.setState(newState, this.saveStateToStorage)
    }

    // save current app state to localstorage
    saveStateToStorage(){
        if(typeof(Storage) !== 'undefined'){
            let newAppState = this.state;
            let newAppStateString = JSON.stringify(newAppState);
            localStorage.setItem('fastextAppState', newAppStateString);
        }else{
            // localstorage not available
        }
    }

    // load current appstate from storage
    loadStateFromStorage(){
        if(typeof(Storage) !== 'undefined'){

            if(localStorage.getItem('fastextAppState') === null){
                // localstorage not set
            }else{
                let currentState = localStorage.getItem('fastextAppState');
                currentState = JSON.parse(currentState);
                this.setState(currentState); // set state to current app state
            }

        }else{
            // localstorage not available
        }
    }

    render(){
        let viewComponent;
        switch(this.state.view){
            case 'home':
                viewComponent = h(HomeView, {appState:{get:this.state,set:this.updateState.bind(this)}});
                break;
            case 'options':
                viewComponent = h(OptionsView, {appState:{get:this.state,set:this.updateState.bind(this)}});
                break;
            case 'load':
                viewComponent = h(LoadView, {appState:{get:this.state,set:this.updateState.bind(this)}});
                break;
            default:
                viewComponent = h('h1', null, 'Error');
                break;
        }

        return (
            viewComponent
        );
    }
}


$(document).ready(function(){
    ReactDOM.render(h(App), document.getElementById('app'))
});
