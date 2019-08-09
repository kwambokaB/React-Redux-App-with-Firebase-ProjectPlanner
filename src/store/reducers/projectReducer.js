const initState = { 
    projects:[
      
        {id:'1', title:'find my inner voice', content:'Listening intently to the sound of my breath and the sound of the movement of air in my lungs.'},
        {id:'2', title:'finding my inner truth', content:'Observing the comings and going of my thoughts and emotions'},
        {id:'3', title:'finding dory', content:'watch finding dory because happiness can also be experienced from a screen'} 
    ]

};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project success', action.project);
            return state;
            case 'CREATE_PROJECT_ERROR':
                console.log('create project error', action.err);
                return state;

                default:
                    return state;     
    }
    
}

export default projectReducer;