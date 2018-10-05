class NavMenu extends React.Component {

    handleClick(event){
        let target = '';
        // make sure we're looking at the right element
        if($(event.target).prop('tagName') !== 'LI'){
            target = $(event.target).parent().attr('target');
        }else{
            target = $(event.target).attr('target');
        }
        this.props.appState.set({view:target});
        
    }

    constructor(){
        super();

        // nav menu options
        this.navItems = [
            {text:'Options',target:'options',img:'images/settings',active:false,class:''},
            {text:'Home',target:'home',img:'images/home',active:false,class:''},
            {text:'Load',target:'load',img:'images/text',active:false,class:''}
        ];

    }

    render(){
        // convert nav menu options to NavItem elements
        let navElements = this.navItems.map((item) => {
            item.key = item.text;
            item.onClick = this.handleClick.bind(this);
            if(this.props.appState.get.view === item.target){
                item.active=true;
            }
            return h(NavItem, item, item.text)
        });

        return(
            h('nav', null, 
                h('ul', null, 
                    navElements
                )
            )
        )
    }
}

// actual mwnu item
function NavItem(props){
    let imgUrl = props.img+'.png';
    let activeImgUrl = props.img+'-active.png';
    let activeImgDisplay = 'none';
    let inactiveImgDisplay = 'inline-block';

    let className = props.class;
    if(props.active){
        className=className+' active';
        activeImgDisplay = 'inline-block';
        inactiveImgDisplay = 'none';
    }

    let activeImgStyle = {display: activeImgDisplay};
    let inactiveImgStyle = {display: inactiveImgDisplay};

    return (
        h('li', {onClick:props.onClick, target:props.target, className:className}, 
            h('img', {src:imgUrl,className:'inactiveMenuImg',style:inactiveImgStyle}),
            h('img', {src:activeImgUrl,className:'activeMenuImg',style:activeImgStyle}),
            props.text
        )
    )
}