export default {
    name: 'App name',
    description: 'The app brief description',
    icon: 'folder.png', //app icon
    //In case it has more apps or "folders" in it
    folders: [
        {
           //Here goes a list app of objects, like this one, that represent the other apps or "folders". 
           //They can be imported.
        }
    ],
    //In case the app has view
    view: {
        component: 'Information', //Here you can pass custom components, which could use any custom atribute
                                  //different or extra from the ones below.
        title: 'App title',
        description: 'App description for view',
        image: 'image.png', //Any image you want to show in the view
        sections: [
            //Here can go app sections, that are also app objects. 
        ] 
    }
}

//Once the app is ready, you need to import it in App.js and put it as part of the export default array.