import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRouter from 'react-router';
import { browserHistory } from 'react-router'


class  App extends React.Component<any,any>{
    constructor(props){
        super(props);
    }

    render(){
        return <div>App content</div>

    }
}

class  Project extends React.Component<any,any>{
    constructor(props){
        super(props);
    }

    render(){
        return <div>Project Content</div>

    }
}
 class  Wait extends React.Component<any,any>{
    constructor(props){
        super(props);
    }

    render(){
        return <div>Wait loading </div>

    }
}


const router=(

    <ReactRouter.Router history={browserHistory}>
        <ReactRouter.Route path="/" component={App} />
        <ReactRouter.Route path="/project" component={Project}/>
        <ReactRouter.Route path="/wait" component={Wait}/>
    </ReactRouter.Router>);

ReactDOM.render(
    router,
    document.getElementById('jumboTron')
);
/*const links=(
    <div  style={{display:'none'}}>
        <ul className="list-group">
            <li className="list-group-item">
                <ReactRouter.Link  id="navLinkHome" to="/">Home</ReactRouter.Link>
            </li>
            <li className="list-group-item">
                <ReactRouter.Link    id="navLinkProject" to="/project">Project</ReactRouter.Link>
            </li>
        </ul>
    </div>
);
ReactDOM.render(
    links
    ,
    document.getElementById('hidden-nav-container')
);
*/