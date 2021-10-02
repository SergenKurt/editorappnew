/**
 * func setStroge
 * @returns {Promise<void>}
 */
async function setStorage(storageName){

    storageName = 'ins.' + storageName;

    const strogeData = JSON.stringify({
        'html' : htmlEditor.getValue(),
        'css' : cssEditor.getValue(),
        'js' : jsEditor.getValue()
    });

    localStorage.setItem(storageName, strogeData);
    setLastStorage(storageName);
}

async function setLastStorage(storageName){
    localStorage.setItem('ins_last_template', storageName);
}

async function getStorageList(){
    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        console.warn(key + " => " + value);
    }
}

async function getStorage(templateName){
    const getTemplate = JSON.parse(localStorage.getItem(templateName));

    htmlEditor.session.setValue(getTemplate['html']);
    cssEditor.session.setValue(getTemplate['css']);
    jsEditor.session.setValue(getTemplate['js']);
}

async function getLastTemplate(){
    const getLastTemplateName = localStorage.getItem("ins_last_template");
    await getStorage(getLastTemplateName);
}
