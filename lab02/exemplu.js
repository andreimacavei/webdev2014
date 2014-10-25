var create = function (resource, data, callback) {
    /**
     * @param (String) resource
     * @param (Object) data
     * @param (Function) callback
    */
    $.ajax({ //Async JS and XML
        method: 'POST',
        url: 'https://webdev-c9-alexandrutopliceanu.c9.io/' + resource,
        dataType: 'json',
        data: data,
        succes: function onSuccess (data) {
            callback(null, data);
        },
        error: function onError (error) {
            callback(error);
        }
    });
}

var read = function(resource, callback) {
    /**
     * @param {String} resource - name of the resource to create
     * @param {Function} callback - continuation function.
     */

     $.ajax({
        method: 'GET',
        url: 'https://webdev-c9-alexandrutopliceanu.c9.io/users' + resource,

     })
}

create('users', {name:'andreimacavei'}, function (error, data) {
    if (error) console.log('Eroare', error.message);
    else console.log('Succes', data);
});

setTimeout(function doSomething() {
    console.log('something');
}, 10000);