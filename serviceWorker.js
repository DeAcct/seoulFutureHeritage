if('serviceWorker' in navigator){
    navigator.serviceWorker.register('js/serviceWorker.js').then(function(reg){
        reg.addEventListener('updatefound', function(){
            newWorker = reg.installing;
            newWorker.addEventListener('statechange', function(){
                switch(newWorker.state){
                    case 'installed':
                        if (navigator.serviceWorker.controller){
                            showUpdateBar();
                        };
                    break
                }
            })
        })
    })
}